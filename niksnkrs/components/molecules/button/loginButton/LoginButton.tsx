import { AtomicButton, SvgLogIn } from '@/components';

/**
 * Responsible for rendering a login button
 *
 * - Responsible for the styling of login button
 * - Responsible for creating functionalities by using atoms
 */
export default function LoginButton() {
  return (
    <AtomicButton shape='round' color='primary' size='s'>
      <SvgLogIn size='1.8rem' color='white' />
    </AtomicButton>
  );
}
