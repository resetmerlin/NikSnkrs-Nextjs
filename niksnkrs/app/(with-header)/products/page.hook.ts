import { useGetProductsQuery } from "@/app/store/features";
import { IProducts } from "@/lib/types";

export const useProductsPage = (): [
  products: IProducts | undefined,
  isLoading: boolean
] => {
  const { data: products, isLoading } = useGetProductsQuery();

  return [products, isLoading];
};
