import { AtomicTitle } from '@/components';
import './OrderColumn.scss';

type IProps = {
  title: string;
};

/**
 * Responsible for rendering a order column
 *
 * - Responsible for the styling of the order column
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function OrderColumn({ title }: IProps) {
  return (
    <>
      <AtomicTitle>{title}</AtomicTitle>
      <div className='orderColumn'></div>
    </>
  );
}
