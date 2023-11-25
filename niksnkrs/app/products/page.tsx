'use client';

import {
  AtomicTitle,
  ChildTemplate,
  HeaderLayout,
  ItemLists,
  ParentTemplate,
} from '@/components';
import { getProducts } from '@/lib/actions/products.actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  productAdded,
  selectProducts,
  useGetProductsQuery,
} from '../store/features';

export default function Page() {
  const isLoading = null;
  const userInfo = null;

  const { data: products } = useGetProductsQuery();

  console.log(products);

  const logOutHandler = () => console.log('touched');

  return (
    <HeaderLayout userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size='s'>
        <ChildTemplate position='topLeft' size='s'>
          <AtomicTitle size='xs'>Latest Products</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position='bottomCenter' size='s'>
          <ItemLists products={products} />
        </ChildTemplate>
      </ParentTemplate>
    </HeaderLayout>
  );
}
