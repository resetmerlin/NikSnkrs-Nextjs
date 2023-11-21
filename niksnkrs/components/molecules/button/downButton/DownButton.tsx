import { AtomicButton, SvgDownArrow } from '@/components';

type IProps = {
  goNextProductPage: () => void;
};

/**
 * Responsible for rendering down button
 *
 * - Responsible for the styling of the down button
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function DownButton({ goNextProductPage }: IProps) {
  return (
    <AtomicButton shape='rect' size='l' onClick={goNextProductPage}>
      <SvgDownArrow size='2.5rem' color='white' />
    </AtomicButton>
  );
}
