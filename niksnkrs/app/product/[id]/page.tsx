'use client';

import {
  AtomicItemImage,
  ChildTemplate,
  HeaderLayout,
  ItemInfoEvents,
  ItemNav,
  ParentTemplate,
} from '@/components';
import { getProducts } from '@/lib/actions/products.actions';
import { IProduct, IProducts } from '@/lib/types';
import { useRouter } from 'next/navigation';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export type ItemColRef = HTMLAnchorElement;

export default function Page({ params }: { params: { id: string } }) {
  const productId = params.id;
  const [products, setProducts] = useState<IProducts | null>(null);
  const columnRef = useRef<ItemColRef | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!products) {
      const handleProducts = async () => {
        setProducts(await getProducts());
      };

      handleProducts();
    }
  }, [params, setProducts, products]);

  const logOutHandler = () => console.log('u clicked');
  const userInfo = null;

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

  const goPrevPage = () => console.log('go prev');
  const addToCart = () => console.log('go add to Cart');

  return (
    <HeaderLayout logOut={logOutHandler} userInfo={userInfo}>
      <ParentTemplate size='full'>
        <ChildTemplate position='left' size='full'>
          <ItemInfoEvents
            product={product}
            goPrevPage={goPrevPage}
            addToCart={addToCart}
          />
        </ChildTemplate>
        <ChildTemplate position='centerRight' size='full'>
          {/* <Object model={id?.id} /> */}
          <AtomicItemImage path='long' size='xl' productId={productId} />
        </ChildTemplate>
        <ChildTemplate position='right' size='full'>
          <ItemNav
            products={products}
            productId={productId}
            goNextProductPage={goNextProductPage}
            ref={columnRef}
          />
        </ChildTemplate>
      </ParentTemplate>
    </HeaderLayout>
  );
}