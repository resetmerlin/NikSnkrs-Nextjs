import { IProduct, IProducts } from '@/lib/types';
import { Item, SkeletonItem } from '@/components';
import './ItemLists.scss';
import Link from 'next/link';

type IProps = {
  products: IProducts | undefined;
  isLoading: boolean;
};

/**
 * Responsible for taking a list of 'products' and rendering them as 'Item's
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
export default function ItemLists({ products, isLoading }: IProps) {
  return (
    <div className='item-lists'>
      {isLoading
        ? [...Array(6).keys()].map((i) => <SkeletonItem key={i} />)
        : products?.map((product: IProduct) => {
            return (
              <Link href={`/product/${product._id}`} key={product._id}>
                <Item product={product} />
              </Link>
            );
          })}
    </div>
  );
}
