import { FieldValues, UseFormRegister } from 'react-hook-form';
import { TNormalElementProps } from '../../../lib/types';
import './AtomicInput.scss';

interface IProps<TFieldValues extends FieldValues>
  extends TNormalElementProps<HTMLInputElement> {
  type: 'password' | 'email' | 'name';
  name: Extract<keyof TFieldValues, string>; // Ensure name is of string type
  register?: UseFormRegister<TFieldValues>;
}

/**
 * Responsible for making Basic Atoms input
 *
 * - Responsible for change the type based on the props
 * - Responsible for change the name based on the props
 * - Responsible for getting the register(optional) on the props
 */
export default function AtomicInput<TFieldValues extends FieldValues>({
  className = '',
  name,
  type,
  register,
  ...props
}: IProps<TFieldValues>) {
  return (
    <input
      {...(register ? register(name as any) : {})} // Only spread if register is provided
      {...props}
      name={name}
      type={type}
      className={`${className} input`}
    />
  );
}
