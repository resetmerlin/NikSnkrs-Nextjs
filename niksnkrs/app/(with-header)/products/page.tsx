'use client';

import {
  AtomicTitle,
  ChildTemplate,
  ItemLists,
  ParentTemplate,
} from '@/components';
import { useGetProductsQuery } from '@/app/store/features';

export default function Page() {
  const { data: products, isLoading } = useGetProductsQuery();

  return (
    <ParentTemplate size="s">
      <ChildTemplate position="topLeft" size="s">
        <AtomicTitle size="xs">Latest Products</AtomicTitle>
      </ChildTemplate>
      <ChildTemplate position="bottomCenter" size="s">
        <ItemLists products={products} isLoading={isLoading} />
      </ChildTemplate>
    </ParentTemplate>
  );
}
