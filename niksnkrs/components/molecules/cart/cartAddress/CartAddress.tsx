import './CartAddress.scss';
import { IAddress } from '@/lib/types';
import { AtomicButton, AtomicSubtitle, AtomicTitle } from '@/components';
import Link from 'next/link';

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
      <Link href='/profile'>
        <AtomicButton size='m'>Change Address</AtomicButton>
      </Link>
    </div>
  );
}
