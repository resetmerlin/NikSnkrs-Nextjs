import { PropsWithChildren } from 'react';
import { AtomicLogo, AtomicSubtitle } from '../../atoms';
import './UserForm.scss';
import Link from 'next/link';

/**
 * Responsible for making user form organisms
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
export default function UserForm({ children }: PropsWithChildren) {
  return (
    <div className='userForm'>
      <Link href='/' className='userForm__logo'>
        <AtomicLogo size='l' />
        <AtomicSubtitle size='xl'>NikeSnkrs eCommerce</AtomicSubtitle>
      </Link>

      <div className='userForm__form'>{children}</div>
    </div>
  );
}
