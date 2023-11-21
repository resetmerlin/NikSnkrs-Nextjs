import { AtomicSubtitle, AtomicTitle } from '@/components';
import './IntroLeft.scss';

/**
 * Responsible for rendering a intro left
 *
 * - Responsible for the styling of the intro left
 * - Responsible for creating functionalities by using atoms
 */
export default function IntroLeft() {
  return (
    <div className='intro-left'>
      <AtomicTitle size='m' strength='600'>
        JUST
      </AtomicTitle>
      <AtomicTitle size='m' strength='600'>
        DO
      </AtomicTitle>
      <AtomicTitle size='m' strength='600'>
        IT
      </AtomicTitle>

      <AtomicSubtitle color='secondary' size='m'>
        You will experience outstanding <br /> Nike Resell shop ever <br /> seen
        before
      </AtomicSubtitle>
    </div>
  );
}
