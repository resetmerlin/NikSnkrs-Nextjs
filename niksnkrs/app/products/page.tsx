'use client';

import {
  AtomicTitle,
  ChildTemplate,
  HeaderLayout,
  ItemLists,
  ParentTemplate,
} from '@/components';
import React from 'react';
import { selectUser, useGetProductsQuery } from '../store/features';
import { useAppSelector } from '../hooks/hooks';
import { IUser } from '@/lib/types';

export default function Page() {
  const userInfo: IUser = useAppSelector(selectUser);
  const { data: products, isLoading } = useGetProductsQuery();

  const logOutHandler = () => console.log('touched');

  return (
    <HeaderLayout userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size='s'>
        <ChildTemplate position='topLeft' size='s'>
          <AtomicTitle size='xs'>Latest Products</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position='bottomCenter' size='s'>
          <ItemLists products={products} isLoading={isLoading} />
        </ChildTemplate>
      </ParentTemplate>
    </HeaderLayout>
  );
}
