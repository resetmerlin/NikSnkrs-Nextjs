import {
  AtomicButton,
  AtomicForm,
  AtomicInput,
  AtomicLabel,
  AtomicSubtitle,
} from '../../../atoms';
import { UseFormReturn } from 'react-hook-form';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { RegisterData } from '@/app/register/page.hook';
import Link from 'next/link';

type IProps = {
  registerSubmit: (data: RegisterData) => void;
  registerError: FetchBaseQueryError | SerializedError | undefined;
  register: UseFormReturn<RegisterData>['register'];
  handleSubmit: UseFormReturn<RegisterData>['handleSubmit'];
  inputErrors: UseFormReturn<RegisterData>['formState']['errors'];
};

/**
 * Responsible for rendering a register form
 *
 * - Responsible for the styling of the rendering form
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function RegisterForm({
  register,
  handleSubmit,
  inputErrors,
  registerSubmit,
  registerError,
}: IProps) {
  return (
    <AtomicForm onSubmit={handleSubmit(registerSubmit)}>
      <div className='form__intro'>
        <AtomicSubtitle size='xl'>Register</AtomicSubtitle>
        <AtomicSubtitle size='m' color='secondary'>
          Get tremendous nike Snkrs right now!
        </AtomicSubtitle>
        {registerError && 'data' in registerError && (
          <p>
            {(registerError as { data: { message: string } })?.data?.message}
          </p>
        )}
      </div>
      <div className='form__inputs-wrap'>
        {/* Email label & input */}
        <AtomicLabel htmlFor='userEmail'>
          <AtomicSubtitle size='m'>Email</AtomicSubtitle>
        </AtomicLabel>
        <AtomicInput
          type='email'
          id='email'
          name='userEmail'
          register={register}
        />
        {inputErrors?.['userEmail'] && (
          <p>{inputErrors?.['userEmail'].message}</p>
        )}

        {/* Name label & input */}
        <AtomicLabel htmlFor='userName'>
          <AtomicSubtitle size='m'>Name</AtomicSubtitle>
        </AtomicLabel>
        <AtomicInput
          type='name'
          id='userName'
          name='userName'
          register={register}
        />
        {inputErrors?.['userName'] && (
          <p>{inputErrors?.['userName'].message}</p>
        )}

        {/* Password label & input */}
        <AtomicLabel htmlFor='userPassword'>
          <AtomicSubtitle size='m'>Password</AtomicSubtitle>
        </AtomicLabel>
        <AtomicInput
          type='password'
          id='userPassword'
          name='userPassword'
          register={register}
        />
        {inputErrors?.['userPassword'] && (
          <p>{inputErrors?.['userPassword'].message}</p>
        )}

        {/* Confirm Password label & input */}
        <AtomicLabel htmlFor='userConfirmPassword'>
          <AtomicSubtitle size='m'>Confirm Password</AtomicSubtitle>
        </AtomicLabel>
        <AtomicInput
          type='password'
          id='userConfirmPassword'
          name='userConfirmPassword'
          register={register}
        />

        {inputErrors?.['userConfirmPassword'] && (
          <p>{inputErrors?.['userConfirmPassword'].message}</p>
        )}
      </div>
      <AtomicButton size='m' type='submit'>
        <AtomicSubtitle size='m' color='tertiary' strength='600'>
          Submit
        </AtomicSubtitle>
      </AtomicButton>

      <Link href='/login' className='margin__top-small'>
        <AtomicSubtitle size='s' color='secondary'>
          Have an account? Sign in right now
        </AtomicSubtitle>
      </Link>
    </AtomicForm>
  );
}
