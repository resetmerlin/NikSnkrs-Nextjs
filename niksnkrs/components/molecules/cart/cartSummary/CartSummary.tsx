import { AtomicButton, AtomicSubtitle } from '@/app/components/atoms';
import './CartSummary.scss';

type IProps = {
  currentDate: string;
  qty: number;
  productPrice: string;
  shippingPrice: number;
  totalPrice: number;
  taxPrice: number;
  paymentMethod: string;
  addToOrderHandler: () => void;
};
/**
 * Responsible for rendering a cart summary
 *
 * - Responsible for the styling of the cart summary
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function CartSummary({
  taxPrice,
  shippingPrice,
  productPrice,
  totalPrice,
  qty,
  currentDate,
  addToOrderHandler,
  paymentMethod,
}: IProps) {
  return (
    <div className='orderSummary'>
      <div>
        <AtomicSubtitle size='s' color='secondary'>
          {currentDate}
        </AtomicSubtitle>
      </div>
      <div>
        <AtomicSubtitle size='l'>Order Summary</AtomicSubtitle>
      </div>
      <div className='orderSummary__border'>
        <AtomicSubtitle size='m' color='secondary'>
          SUBTOTAL
        </AtomicSubtitle>
        <AtomicSubtitle size='m' color='secondary'>
          ({qty})items
        </AtomicSubtitle>
      </div>
      <div className='orderSummary__border'>
        <AtomicSubtitle size='l'>Total Item props</AtomicSubtitle>
        <AtomicSubtitle size='l'>$ {productPrice}</AtomicSubtitle>
      </div>

      <div>
        <AtomicSubtitle size='m' color='secondary'>
          SHIPPING
        </AtomicSubtitle>
        <AtomicSubtitle size='m' color='secondary'>
          ${shippingPrice}
        </AtomicSubtitle>
      </div>

      <div className='orderSummary__border'>
        <AtomicSubtitle size='m' color='secondary'>
          TAX
        </AtomicSubtitle>
        <AtomicSubtitle size='m' color='secondary'>
          ${taxPrice}
        </AtomicSubtitle>
      </div>

      <div className='orderSummary__border'>
        <AtomicSubtitle size='l'>Total</AtomicSubtitle>
        <AtomicSubtitle size='l'>$ {totalPrice}</AtomicSubtitle>
      </div>

      <div>
        <AtomicSubtitle size='m' color='secondary'>
          Payment method
        </AtomicSubtitle>
        <AtomicSubtitle size='m' color='secondary'>
          {paymentMethod}
        </AtomicSubtitle>
      </div>
      <AtomicButton size='m' type='button' onClick={addToOrderHandler}>
        Proceed to Checkout
      </AtomicButton>
    </div>
  );
}
