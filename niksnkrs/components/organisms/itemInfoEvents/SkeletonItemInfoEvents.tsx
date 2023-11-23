import { AtomicButton, SkeletonItemInfo } from '@/components';
import React from 'react';
import './ItemInfoEvents.scss';

export default function SkeletonItemInfoEvents() {
  return (
    <form className='itemInfoEvents'>
      <AtomicButton type='button' shape='none' className='arrow-button'>
        <span className='skeleton-text-big ' />
      </AtomicButton>
      <SkeletonItemInfo />

      <div className='itemInfoEvents__btn-wrap skeleton'>
        <AtomicButton
          shape='rect'
          type='submit'
          size='xxl'
          className='skeleton'
        />

        <AtomicButton
          shape='rect'
          type='submit'
          color='secondary'
          size='xxl'
          className='skeleton'
        />
      </div>
    </form>
  );
}
