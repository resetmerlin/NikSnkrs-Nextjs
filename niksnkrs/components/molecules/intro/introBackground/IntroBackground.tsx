import { AtomicTitle } from '@/components';
import './IntroBackground.scss';

/**
 * Responsible for rendering a intro background
 *
 * - Responsible for the styling of the intro background
 * - Responsible for creating functionalities by using atoms
 */
export default function IntroBackground() {
  return (
    <div className='intro-background'>
      <AtomicTitle size='max' color='secondary' strength='500'>
        NIKE
      </AtomicTitle>
    </div>
  );
}
