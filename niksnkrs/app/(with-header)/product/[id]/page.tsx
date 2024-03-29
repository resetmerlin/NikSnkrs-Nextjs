'use client';

import { productAdded, selectProducts } from '@/app/store/features';
import {
  AtomicItemImage,
  ChildTemplate,
  ItemInfoEvents,
  ItemNav,
  ParentTemplate,
  SkeletonItemInfoEvents,
} from '@/components';
import { getProducts } from '@/lib/actions/products.actions';
import { IProduct } from '@/lib/types';
import { useRouter } from 'next/navigation';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type ItemColRef = HTMLAnchorElement;

export default function Page({ params }: { params: { id: string } }) {
  const productId = params.id;
  const columnRef = useRef<ItemColRef | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedProducts = useSelector(selectProducts);
  const products = selectedProducts[0];

  useEffect(() => {
    let ignore = false;
    if (!products || products.length == 0) {
      const handleProducts = async () => {
        const data = await getProducts();
        if (!ignore) dispatch(productAdded(data));
      };

      handleProducts();
      return () => {
        ignore = true;
      };
    }
  }, [dispatch, products]);

  const product = useMemo(() => {
    return (
      products &&
      [...products].filter(
        (product): product is IProduct => product?._id == productId
      )[0]
    );
  }, [products, productId]);

  /** Current product index  */
  const currentIndex = useMemo(() => {
    return product && products ? products?.indexOf(product) : -1;
  }, [product, products]);

  const goNextProductPage = useCallback(() => {
    if (currentIndex + 1 !== products?.length && products) {
      router.push(`${products[currentIndex + 1]?._id}`);
    }
    // Go first if reaches last index
    else if (products) {
      router.push(`${products[0]?._id}`);
    }
  }, [currentIndex, products, router]);

  const [isObserving, setIsObserving] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && columnRef.current) {
        setIsObserving(entry.isIntersecting);
      }
    });
    if (columnRef.current) {
      observer.observe(columnRef.current);
    }

    return () => observer.disconnect();
  }, [goNextProductPage, isObserving]);

  /** Follow the observed column */
  useEffect(() => {
    if (isObserving && columnRef.current) {
      columnRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'start',
      });
    }
  }, [goNextProductPage, isObserving]);

  const goPrevPage = () => {
    router.back();
  };
  /** go cart page with quantity */
  const addToCart = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const qty = e.currentTarget?.productSelect.value;

      if (product?.countInStock === 0) {
        alert('Out of Stock');
      } else {
        router.push(`/cart/${product?._id}?qty=${qty}`);
      }
    },
    [router, product]
  );
  return (
    <ParentTemplate size="full">
      <ChildTemplate position="left" size="full">
        {!products ? (
          <SkeletonItemInfoEvents />
        ) : (
          <ItemInfoEvents
            product={product}
            goPrevPage={goPrevPage}
            addToCart={addToCart}
          />
        )}
      </ChildTemplate>
      <ChildTemplate position="centerRight" size="full">
        {/* <Object model={id?.id} /> */}
        <AtomicItemImage path="long" size="xl" productId={productId} />
      </ChildTemplate>
      <ChildTemplate position="right" size="full">
        <ItemNav
          products={products}
          productId={productId}
          goNextProductPage={goNextProductPage}
          ref={columnRef}
        />
      </ChildTemplate>
    </ParentTemplate>
  );
}
