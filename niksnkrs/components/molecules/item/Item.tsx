import {
  AtomicItem,
  AtomicItemImage,
  AtomicSubtitle,
  SvgStar,
} from '@/app/components/atoms';
import './Item.scss';
import { IProduct } from '@/lib/types';

type IProps = {
  product: IProduct;
};

/**
 * Responsible for rendering a item
 *
 * - Responsible for the styling of the item
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function Item({ product }: IProps) {
  return (
    <AtomicItem size='m'>
      <AtomicItemImage path='short' size='l' productId={product._id} />
      <AtomicSubtitle size='l'>{product?.name}</AtomicSubtitle>
      <div className='card__stars'>
        <SvgStar color='black' />
        <SvgStar color='black' />
        <SvgStar color='black' />
        <SvgStar color='black' />
        <SvgStar color='black' />
      </div>
      <AtomicSubtitle size='l'>$ {product?.price}</AtomicSubtitle>
    </AtomicItem>
  );
}
