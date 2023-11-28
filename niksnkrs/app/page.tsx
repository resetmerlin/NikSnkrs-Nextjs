'use client';

import { useCallback } from 'react';
import {
  CardLists,
  CardListsSkeleton,
  ChildTemplate,
  HeaderLayout,
  Intro,
  ParentTemplate,
} from '../components';
import { logOut, useAppDispatch, useAppSelector } from './hooks/hooks';
import { selectUser, useGetProductsQuery } from './store/features';

export default function Page() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const { data: products, isLoading } = useGetProductsQuery();

  const logOutHandler = useCallback(() => {
    logOut(dispatch);
  }, [dispatch]);

  const threeProducts = products && [...products]?.slice(0, 3);

  return (
    <HeaderLayout userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size='s'>
        <ChildTemplate position='center' size='s'>
          <Intro />
        </ChildTemplate>
        <ChildTemplate position='bottomRight' size='s'>
          {isLoading ? (
            <CardListsSkeleton />
          ) : (
            <CardLists products={threeProducts} />
          )}
        </ChildTemplate>
      </ParentTemplate>
    </HeaderLayout>
  );
}
