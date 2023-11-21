import { AtomicSubtitle, AtomicTitle } from '@/app/components/atoms';
import './IntroRight.scss';

/**
 * Responsible for rendering a intro right
 *
 * - Responsible for the styling of the intro right
 * - Responsible for creating functionalities by using atoms
 */
export default function IntroRight() {
  return (
    <div className='intro-right'>
      <AtomicTitle size='xs' strength='500'>
        NIKE ZOOM AIR
      </AtomicTitle>
      <AtomicTitle size='s' strength='600'>
        $260
      </AtomicTitle>

      <AtomicSubtitle color='primary' size='m'>
        GET IT NOW
      </AtomicSubtitle>
    </div>
  );
}
