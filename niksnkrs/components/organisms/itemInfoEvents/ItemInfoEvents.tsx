import React from 'react';
import { AtomicButton, AtomicSubtitle, SvgLeftArrowAlt } from '../../atoms';
import { ItemInfo } from '../../molecules';
import './ItemInfoEvents.scss';
import { IProduct } from '@/lib/types';

type IProps = {
  goPrevPage: () => void;
  addToCart: (event: React.FormEvent<HTMLFormElement>) => void;
  product: IProduct | null;
};

/**
 * Responsible for making item info events organisms
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
export default function ItemInfoEvents({
  product,
  goPrevPage,
  addToCart,
}: IProps) {
  return (
    <form className='itemInfoEvents' onSubmit={addToCart}>
      <AtomicButton
        type='button'
        shape='none'
        className='arrow-button'
        onClick={goPrevPage}
      >
        <SvgLeftArrowAlt size='8rem' color='black' />
      </AtomicButton>
      <ItemInfo product={product} />

      <div className='itemInfoEvents__btn-wrap'>
        <AtomicButton shape='rect' type='submit' size='xxl'>
          <AtomicSubtitle color='tertiary' size='xl' strength='600'>
            Order Now
          </AtomicSubtitle>
        </AtomicButton>

        <AtomicButton shape='rect' type='submit' color='secondary' size='xxl'>
          <AtomicSubtitle size='l' strength='600'>
            Favorite
          </AtomicSubtitle>
        </AtomicButton>
      </div>
    </form>
  );
}
