/* eslint-disable react/jsx-props-no-spreading */
import Image from 'next/image';
import { TNormalElementProps } from '../../../lib/types';
import './AtomicItemImage.scss';

interface IProps extends TNormalElementProps<HTMLImageElement> {
  size: 's' | 'm' | 'l' | 'xl';
  path: 'short' | 'long';
  productId: string | undefined;
}

/**
 * Responsible for making Basic Atoms image of item
 *
 * - Responsible for change the size based on the props
 * - Responsible for change the src based on the props(path, productId)
 */
export default function AtomicItemImage({
  children,
  className = '',
  productId,
  path,
  size,
  ...props
}: IProps) {
  return (
    <Image
      width={
        size === 'xl' ? 960 : size === 'l' ? 368 : size === 'm' ? 176 : 123.2
      }
      height={
        size === 'xl' ? 960 : size === 'l' ? 320 : size === 'm' ? 176 : 123.2
      }
      {...props}
      src={
        path == 'short'
          ? `/products/${productId}.png`
          : `/products/${productId}.png`
      }
      alt='productId'
      id='nike-product'
      className={`itemImage-${size}  itemImage ${className}`}
    />
  );
}
