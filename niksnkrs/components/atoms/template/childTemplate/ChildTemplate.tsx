/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '@/lib/types';
import './ChildTemplate.scss';

interface IProps extends TNormalElementProps<HTMLDivElement> {
  position:
    | 'center'
    | 'bottomRight'
    | 'topLeft'
    | 'bottomCenter'
    | 'left'
    | 'right'
    | 'centerRight'
    | 'centerLeft'
    | 'leftRight'
    | 'bottomLeft';

  size: 's' | 'm' | 'full';
}

/**
 * Responsible for making Basic Atoms child template
 *
 * - Responsible for change the position based on the props
 * - Responsible for change the size based on the props
 */
export default function ChildTemplate({
  children,
  className = '',
  position,
  size,
  ...props
}: IProps) {
  return (
    <div
      {...props}
      className={`${className} child-template-w-${size}-${position}`}
    >
      {children}
    </div>
  );
}
