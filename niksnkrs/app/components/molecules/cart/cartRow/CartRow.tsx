import { ICart } from '@/app/lib/types';
import './CartRow.scss';
import {
  AtomicButton,
  AtomicItemImage,
  AtomicSubtitle,
  SvgX,
} from '@/app/components/atoms';

type IProps = {
  cartProduct: ICart;
  deletOnCart: (product: ICart['product']) => void;
};

/**
 * Responsible for rendering a  cart row
 *
 * - Responsible for the styling of the cart row
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function CartRow({ cartProduct, deletOnCart }: IProps) {
  return (
    <div className='cartRow'>
      <div>
        <AtomicItemImage
          path='long'
          size='s'
          productId={cartProduct?.product}
        />
      </div>
      <div>
        <AtomicSubtitle size='m'>{cartProduct?.name}</AtomicSubtitle>
      </div>
      <div>
        <AtomicSubtitle size='m'>$ {cartProduct?.price}</AtomicSubtitle>
      </div>
      <div>
        <select name='cartQty' id='cartQty' defaultValue={cartProduct?.qty}>
          {Array.from({ length: cartProduct?.countInStock }).map((_, num) => {
            return (
              <option value={num + 1} key={num + 1}>
                {num + 1}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <AtomicButton
          shape='none'
          onClick={() => deletOnCart(cartProduct?.product)}
        >
          <SvgX size='3rem' color='black' />
        </AtomicButton>
      </div>
    </div>
  );
}
