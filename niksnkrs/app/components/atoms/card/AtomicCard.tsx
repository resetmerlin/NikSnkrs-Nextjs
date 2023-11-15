import { TNormalElementProps } from '../../../lib/types';
import './AtomicCard.scss';

/**
 * Responsible for making Basic Atoms card
 *
 * - Responsible for work as a container of Card molecules
 */

export default function AtomicCard({
  children,
  className = '',
}: TNormalElementProps<HTMLDivElement>) {
  return <div className={`${className}  card`}>{children}</div>;
}
