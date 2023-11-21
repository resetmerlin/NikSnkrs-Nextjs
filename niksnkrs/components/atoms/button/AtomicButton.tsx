/* eslint-disable react/jsx-props-no-spreading */
import { TButtonElementProps } from '../../../lib/types';
import './AtomicButton.scss';
interface IProps extends TButtonElementProps {
  type?: 'submit' | 'button';
  color?: 'primary' | 'secondary';
  shape?: 'normal' | 'round' | 'rect' | 'none';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

/**
 * Responsible for making Basic Atoms button
 *
 * - Responsible for change the type based on the props
 * - Responsible for change the color based on the props
 * - Responsible for change the shape based on the props
 * - Responsible for change the size based on the props
 */
export default function AtomicButton({
  children,
  className = '',
  color,
  shape,
  type,
  size,
  ...props
}: IProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${className}   button-${color}   button-${shape} button button-${size}`}
    >
      {children}
    </button>
  );
}

AtomicButton.defaultProps = {
  type: 'button',
  color: 'primary',
  shape: 'normal',
};
