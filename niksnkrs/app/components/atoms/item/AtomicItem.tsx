import { TNormalElementProps } from '../../../lib/types';
import './AtomicItem.scss';

interface IProps extends TNormalElementProps<HTMLDivElement> {
  size: 'xs' | 's' | 'm';
}

/**
 * Responsible for making Basic Atoms item
 *
 * - Responsible for work as a container of Item molecule
 */
export default function AtomicItem({
  children,
  className = '',
  color,
  size,
  ...props
}: IProps) {
  return (
    <div {...props} className={`${className}  item item-${size}`}>
      {children}
    </div>
  );
}
