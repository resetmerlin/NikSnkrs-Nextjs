'use client';

import { IUser } from '@/lib/types';
import { useEffect } from 'react';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { LoginData } from './page';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks/hooks';
import { selectUser, useUserAuthenticatedMutation } from '../store/features';
import { requiredLogin } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const useCheckAuth = (userInfo: IUser, router: AppRouterInstance) => {
  useEffect(() => {
    if (userInfo.token && userInfo._id) {
      router.push('/');
    }
  }, [userInfo, router]);
};

export const useLoginPage = (): [
  inputErrors: UseFormReturn<LoginData>['formState']['errors'],
  handleSubmit: UseFormReturn<LoginData>['handleSubmit'],
  loginSubmit: (data: LoginData) => void,
  register: UseFormReturn<LoginData>['register'],
  loginError: FetchBaseQueryError | SerializedError | undefined
] => {
  const userInfo: IUser = useAppSelector(selectUser);
  const router = useRouter();

  // Login via api
  const [userAuthenticate, { error: loginError }] =
    useUserAuthenticatedMutation();

  // Submit login
  const loginSubmit: SubmitHandler<LoginData> = (data: LoginData) => {
    userAuthenticate({
      email: data.userEmail,
      password: data.userPassword,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm<LoginData>({
    mode: 'onChange',
    resolver: zodResolver(requiredLogin),
  });

  // Go to home page after login
  useCheckAuth(userInfo, router);

  return [inputErrors, handleSubmit, loginSubmit, register, loginError];
};
