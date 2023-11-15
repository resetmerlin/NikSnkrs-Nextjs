import { AtomicButton, SvgCartAlt } from '@/app/components/atoms';

/**
 * Responsible for rendering a cart button
 *
 * - Responsible for the styling of the cart button
 * - Responsible for creating functionalities by using atoms
 */
export default function CartButton() {
  return (
    <AtomicButton shape='round' color='secondary' size='s'>
      <SvgCartAlt size='1.8rem' color='black' />
    </AtomicButton>
  );
}
