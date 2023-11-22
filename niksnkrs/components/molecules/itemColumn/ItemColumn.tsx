'use client';

import { IProduct } from '@/lib/types';
import { AtomicItem } from '../../atoms';
import './ItemColumn.scss';
import { forwardRef } from 'react';
import Link from 'next/link';
import { ItemColRef } from '@/app/product/[id]/page';

type IProps = {
  productId?: string;
  product: IProduct;
};

/**
 * Responsible for making item column molecules
 *
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default forwardRef<ItemColRef, IProps>(function ItemColumn(
  { product, productId },
  ref
) {
  return (
    <Link href={`/product/${product._id}`} ref={ref}>
      <AtomicItem
        size='xs'
        className={productId == product?._id ? `box-border` : ''}
      >
        <img src={`/products/${product?._id}.png`} alt='card-jordan' />
      </AtomicItem>
    </Link>
  );
});
