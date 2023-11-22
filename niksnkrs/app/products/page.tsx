import {
  AtomicTitle,
  ChildTemplate,
  HeaderLayout,
  ItemLists,
  ParentTemplate,
} from '@/components';
import { getProducts } from '@/lib/actions/products.actions';
import React from 'react';

async function Page() {
  const isLoading = null;
  const userInfo = null;
  const products = await getProducts();

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

export default Page;
