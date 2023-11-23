import { AtomicSubtitle, AtomicTitle, SvgStar } from '@/components';
import Image from 'next/image';
import React from 'react';
import './ItemInfo.scss';

export default function SkeletonItemInfo() {
  return (
    <div className='item-info'>
      <span className='skeleton skeleton-text-big' />
      <span className='skeleton skeleton-text-big' />

      <div className='item-info__bottom'>
        <div className='item-info__bottom-info '>
          <span className='skeleton skeleton-text-big' />
          <span className='skeleton skeleton-text-small' />

          <span className='skeleton skeleton-text-small' />

          <div className='item-info__bottom-info__select'>
            <span className='skeleton skeleton-text-small' />
          </div>
        </div>
      </div>
    </div>
  );
}
