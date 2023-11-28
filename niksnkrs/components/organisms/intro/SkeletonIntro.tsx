import {
  IntroBackground,
  IntroCenter,
  IntroLeft,
  IntroRight,
} from '@/components/molecules/intro';
import React from 'react';
import './Intro.scss';

export default function SkeletonIntro() {
  return (
    <div className='intro'>
      <IntroLeft />
      <IntroCenter />
      <IntroBackground />
      <IntroRight />
    </div>
  );
}
