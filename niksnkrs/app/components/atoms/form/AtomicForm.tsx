import { TNormalElementProps } from '../../../lib/types';

/**
 * Responsible for making Basic Atoms form
 *
 * - Responsible for work as a container of form molecules
 */
export default function AtomicForm({
  children,
  className = '',
  ...props
}: TNormalElementProps<HTMLFormElement>) {
  return (
    <form {...props} className={`${className}  form`}>
      {children}
    </form>
  );
}
