'use client';

import {
  AtomicTitle,
  ChildTemplate,
  HeaderLayout,
  ItemLists,
  ParentTemplate,
} from '@/components';
import React from 'react';
import { useGetProductsQuery } from '../store/features';

export default function Page() {
  const userInfo = null;

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
