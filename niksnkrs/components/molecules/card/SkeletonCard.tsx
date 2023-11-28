import { AtomicCard } from '@/components';
import React from 'react';
import './Card.scss';

export default function SkeletonCard() {
  return (
    <AtomicCard>
      <div className='card__content'>
        <span className='skeleton-text-big skeleton'></span>

        <span className='skeleton-text-small skeleton'></span>

        <span className='skeleton-text-small skeleton'></span>
      </div>
    </AtomicCard>
  );
}
