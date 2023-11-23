'use client';

import Image from 'next/image';
/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../lib/types';
import './AtomicLogo.scss';

interface IProps extends TNormalElementProps<HTMLImageElement> {
  size?: 's' | 'm' | 'l' | 'xl';
}

/**
 * Responsible for making Basic Atoms logo
 *
 * - Responsible for change the size based on the props
 */
export default function AtomicLogo({
  children,
  className = '',
  size,
  ...props
}: IProps) {
  return (
    <Image
      {...props}
      width={112}
      height={112}
      src={'/nike-logo-black.png'}
      alt='nike-logo-black'
      id='nike-logo'
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = '../nike-logo-black.png';
      }}
      className={`nike-${size}  nike`}
    />
  );
}
