/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '@/lib/types';
import './ParentTemplate.scss';

interface IProps extends TNormalElementProps<HTMLDivElement> {
  size: 's' | 'm' | 'full';
}

/**
 * Responsible for making Basic Atoms parent template
 *
 * - Responsible for change the size based on the props
 */
export default function ParentTemplate({
  children,
  className = '',
  size,
  ...props
}: IProps) {
  return (
    <div {...props} className={`${className}     template-${size} template`}>
      {children}
    </div>
  );
}
