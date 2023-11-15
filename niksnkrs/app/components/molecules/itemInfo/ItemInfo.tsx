import { AtomicSubtitle, AtomicTitle, SvgStar } from '@/app/components/atoms';
import './ItemInfo.scss';
import { IProduct } from '@/app/lib/types';
import Image from 'next/image';

type IProps = {
  product: IProduct;
};

/**
 * Responsible for making item info molecules
 *
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function ItemInfo({ product }: IProps) {
  return (
    <div className='item-info'>
      <AtomicTitle size='m' strength='600'>
        {product?.name}
      </AtomicTitle>
      <div className='item-info__bottom'>
        <div className='item-info__bottom-info'>
          <AtomicTitle size='s'>$ {product?.price}</AtomicTitle>
          <AtomicSubtitle size='l'>
            CURRENT STOCKS: {product?.countInStock}
          </AtomicSubtitle>
          <div className='card__stars'>
            <SvgStar color='black' />
            <SvgStar color='black' />
            <SvgStar color='black' />
            <SvgStar color='black' />
            <SvgStar color='black' />
          </div>
          <div className='item-info__bottom-info__select'>
            <AtomicSubtitle size='l'>SELECT:</AtomicSubtitle>
            <select id='productSelect'>
              {Array.from({ length: product?.countInStock }).map((_, num) => {
                return (
                  <option value={num + 1} key={num + 1}>
                    {num + 1}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <Image src='../item-nike-logo.jpg' alt='item-nike-logo' />
      </div>
    </div>
  );
}

ItemInfo.defaultProps = {
  product: [],
};
