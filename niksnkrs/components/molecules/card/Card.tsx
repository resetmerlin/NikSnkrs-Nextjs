import { IProduct } from '@/lib/types';
import './Card.scss';
import {
  AtomicCard,
  AtomicItemImage,
  AtomicSubtitle,
  SvgStar,
} from '@/app/components/atoms';

type IProps = {
  product: IProduct;
};
/**
 * Responsible for rendering card
 *
 * - Responsible for the styling of the card
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function Card({ product }: IProps) {
  return (
    <AtomicCard>
      <AtomicItemImage path='short' size='m' productId={product?._id} />
      <div className='card__content'>
        <AtomicSubtitle size='m'>{product?.name}</AtomicSubtitle>

        <div className='card__stars'>
          <SvgStar color='black' />
          <SvgStar color='black' />
          <SvgStar color='black' />
          <SvgStar color='black' />
          <SvgStar color='black' />
        </div>
        <AtomicSubtitle size='m'>$ {product?.price}</AtomicSubtitle>
      </div>
    </AtomicCard>
  );
}
