import { Link } from 'react-router-dom';
import './CartAddress.scss';
import { IAddress } from '@/lib/types';
import {
  AtomicButton,
  AtomicSubtitle,
  AtomicTitle,
} from '@/app/components/atoms';

type IProps = {
  address: IAddress;
};
/**
 * Responsible for rendering a  cart address
 *
 * - Responsible for the styling of the cart address
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function CartAddress({ address }: IProps) {
  return (
    <div className='cardAddress'>
      <AtomicTitle size='xs'>Address</AtomicTitle>

      <div>
        <AtomicSubtitle size='m'>Address: {address?.address}</AtomicSubtitle>
      </div>
      <Link to='/profile'>
        <AtomicButton size='m'>Change Address</AtomicButton>
      </Link>
    </div>
  );
}
