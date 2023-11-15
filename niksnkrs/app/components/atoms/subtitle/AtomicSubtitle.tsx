/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../lib/types';
import './AtomicSubtitle.scss';

interface IProps extends TNormalElementProps<HTMLSpanElement> {
  size?: 's' | 'm' | 'l' | 'xl';
  color?: 'primary' | 'secondary' | 'tertiary';
  strength?: '400' | '500' | '600' | '700';
}

/**
 * Responsible for making Basic Atoms subtitle
 *
 * - Responsible for change the size based on the props
 * - Responsible for change the color based on the props
 * - Responsible for change the strength based on the props
 */
export default function AtomicSubtitle({
  children,
  className = '',
  size,
  color,
  strength,

  ...props
}: IProps) {
  return (
    <span
      {...props}
      className={`${className}  subtitle-${size} subtitle-${strength} subtitle-${color} subtitle`}
    >
      {children}
    </span>
  );
}

AtomicSubtitle.defaultProps = {
  size: 'm',
  color: 'primary',
  strength: '400',
};
