import { productAdded, selectProducts } from "@/app/store/features";
import { getProducts } from "@/lib/actions/products.actions";
import { IProduct, IProducts } from "@/lib/types";
import { useRouter } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ItemColRef } from "./page";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { AppDispatch } from "@/app/store/store";

export const useProductPage = (id: string) => {
  const productId = id;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectedProducts = useAppSelector(selectProducts);
  const products = selectedProducts[0];
  const columnRef = useRef<ItemColRef | null>(null);

  /** Fetch Products hook */
  useFetchProducts(products, dispatch);

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

  /** Inersection Observer hook */
  useIntersectioObserver(goNextProductPage, columnRef);

  const goPrevPage = () => {
    router.back();
  };
  const addToCart = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const qty = e.currentTarget?.productSelect.value;

      if (product?.countInStock === 0) {
        alert("Out of Stock");
      } else {
        router.push(`/cart/${product?._id}?qty=${qty}`);
      }
    },
    [router, product]
  );

  return [
    products,
    product,
    goPrevPage,
    addToCart,
    productId,
    products,
    goNextProductPage,
    columnRef,
  ];
};

/** Fetch products using server actions */
const useFetchProducts = (products: IProducts, dispatch: AppDispatch) => {
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
};

/** Intersection hook for observing current product UI frame */
const useIntersectioObserver = (
  goNextProductPage: () => void,
  columnRef: React.RefObject<ItemColRef>
) => {
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
        behavior: "smooth",
        block: "end",
        inline: "start",
      });
    }
  }, [goNextProductPage, isObserving]);
};
