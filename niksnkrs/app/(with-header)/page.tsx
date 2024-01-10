'use client';

import {
  CardLists,
  CardListsSkeleton,
  ChildTemplate,
  Intro,
  ParentTemplate,
} from '../../components';
import { useGetProductsQuery } from '../store/features';

export default function Page() {
  const { data: products, isLoading } = useGetProductsQuery();

  const threeProducts = products && [...products]?.slice(0, 3);

  return (
    <ParentTemplate size="s">
      <ChildTemplate position="center" size="s">
        <Intro />
      </ChildTemplate>
      <ChildTemplate position="bottomRight" size="s">
        {isLoading ? (
          <CardListsSkeleton />
        ) : (
          <CardLists products={threeProducts} />
        )}
      </ChildTemplate>
    </ParentTemplate>
  );
}
