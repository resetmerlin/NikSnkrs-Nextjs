import { getProductById } from '@/lib/actions/products.actions';
import React from 'react';

async function Page({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  return <div>page</div>;
}

export default Page;
