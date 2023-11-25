import { AtomicItem } from '@/components';
import React from 'react';
import './Item.scss';

export default function SkeletonItem() {
  return (
    <AtomicItem size='m'>
      <div className='skeleton-text__body skeleton' />

      <span className='skeleton-text-small skeleton'></span>
      <span className='skeleton-text-small-half skeleton'></span>

      <span className='skeleton-text-small-half skeleton'></span>
    </AtomicItem>
  );
}
