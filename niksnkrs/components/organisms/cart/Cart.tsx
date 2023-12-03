import './Cart.scss';
import { AtomicSubtitle } from '../../atoms';
import { CartRow } from '../../molecules';
import { ICart, ICarts } from '@/lib/types';

type IProps = {
  cartProducts: ICarts;
  deletOnCart: (product: ICart['product']) => void;
};

/**
 * Responsible for taking a list of 'cartProducts' and rendering them as 'Cart's
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
export default function Cart({ cartProducts, deletOnCart }: IProps) {
  return (
    <div className='cart'>
      <div className='cart__row'>
        <AtomicSubtitle size='l' color='secondary'>
          Product
        </AtomicSubtitle>
        <AtomicSubtitle size='l' color='secondary'>
          Name
        </AtomicSubtitle>
        <AtomicSubtitle size='l' color='secondary'>
          Price
        </AtomicSubtitle>
        <AtomicSubtitle size='l' color='secondary'>
          Quantity
        </AtomicSubtitle>
        <AtomicSubtitle size='l' color='secondary'>
          Delete
        </AtomicSubtitle>
      </div>
      {cartProducts &&
        cartProducts?.map((cartProduct: ICart) => (
          <CartRow
            cartProduct={cartProduct}
            key={cartProduct?.product}
            deletOnCart={deletOnCart}
          />
        ))}
    </div>
  );
}
