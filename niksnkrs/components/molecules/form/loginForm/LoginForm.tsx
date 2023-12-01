'use client';

import {
  AtomicButton,
  AtomicForm,
  AtomicInput,
  AtomicLabel,
  AtomicSubtitle,
} from '../../../atoms';

import './LoginForm.scss';
import { UseFormReturn } from 'react-hook-form';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { LoginData } from '@/app/(without-header)/login/page';
import Link from 'next/link';

type IProps = {
  loginSubmit: (data: LoginData) => void;
  loginError: FetchBaseQueryError | SerializedError | undefined;
  register: UseFormReturn<LoginData>['register'];
  handleSubmit: UseFormReturn<LoginData>['handleSubmit'];
  inputErrors: UseFormReturn<LoginData>['formState']['errors'];
};

/**
 * Responsible for rendering a login form
 *
 * - Responsible for the styling of the login form
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function LoginForm({
  inputErrors,
  loginSubmit,
  handleSubmit,
  register,
  loginError,
}: IProps) {
  return (
    <AtomicForm onSubmit={handleSubmit(loginSubmit)}>
      <div className='form__intro'>
        <AtomicSubtitle size='xl'>Sign in</AtomicSubtitle>
        <AtomicSubtitle size='m' color='secondary'>
          Get tremendous nike Snkrs right now!
        </AtomicSubtitle>
        {loginError && 'data' in loginError && (
          <p>{(loginError as { data: { message: string } })?.data?.message}</p>
        )}
      </div>
      <div className='form__inputs-wrap'>
        {/* Email label & input */}
        <AtomicLabel htmlFor='userEmail'>
          <AtomicSubtitle size='m'>Email</AtomicSubtitle>
        </AtomicLabel>
        <AtomicInput
          type='email'
          id='userEmail'
          name='userEmail'
          register={register}
        />
        {inputErrors?.['userEmail'] && (
          <p>{inputErrors?.['userEmail'].message}</p>
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
      </div>
      <AtomicButton size='m' type='submit'>
        <AtomicSubtitle size='m' color='tertiary' strength='600'>
          Submit
        </AtomicSubtitle>
      </AtomicButton>

      <Link href='/register' className='margin__top-small'>
        <AtomicSubtitle size='s' color='secondary'>
          New Customer? Register Now!
        </AtomicSubtitle>
      </Link>
    </AtomicForm>
  );
}
