import { IProduct, IProducts } from '@/lib/types';
import { Card } from '../../molecules';
import './CardLists.scss';

type IProps = {
  products: IProducts | undefined;
};

/**
 * Responsible for taking a list of 'products' and rendering them as 'Card's
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
export default function CardLists({ products }: IProps) {
  return (
    <div className='card-lists'>
      {products?.map((product: IProduct) => {
        return <Card product={product} key={product._id} />;
      })}
    </div>
  );
}
