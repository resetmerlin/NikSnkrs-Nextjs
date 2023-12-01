'use client';

import {
  AtomicTitle,
  ChildTemplate,
  ItemLists,
  ParentTemplate,
} from '@/components';
import React, { useCallback } from 'react';
import { IUser } from '@/lib/types';
import { useDispatch } from 'react-redux';
import { selectUser, useGetProductsQuery } from '@/app/store/features';
import { logOut, useAppSelector } from '@/app/hooks/hooks';

export default function Page() {
  const dispatch = useDispatch();
  const userInfo: IUser = useAppSelector(selectUser);
  const { data: products, isLoading } = useGetProductsQuery();

  const logOutHandler = useCallback(() => {
    logOut(dispatch);
  }, [dispatch]);

  return (
    <ParentTemplate size='s'>
      <ChildTemplate position='topLeft' size='s'>
        <AtomicTitle size='xs'>Latest Products</AtomicTitle>
      </ChildTemplate>
      <ChildTemplate position='bottomCenter' size='s'>
        <ItemLists products={products} isLoading={isLoading} />
      </ChildTemplate>
    </ParentTemplate>
  );
}
