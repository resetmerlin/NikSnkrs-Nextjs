'use client';

import { useEffect } from 'react';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useUserAuthorizedMutation } from '../store/features';
import { IUser } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/lib/schema';

export type RegisterData = {
  userEmail: string;
  userPassword: string;
  userName: string;
  userConfirmPassword: string;
};

export const useRegisterPage = (): [
  register: UseFormReturn<RegisterData>['register'],
  handleSubmit: UseFormReturn<RegisterData>['handleSubmit'],
  inputErrors: UseFormReturn<RegisterData>['formState']['errors'],
  registerSubmit: (data: RegisterData) => void,
  registerError: FetchBaseQueryError | SerializedError | undefined
] => {
  const router = useRouter();

  // Register via api
  const [userAuthorize, { error: registerError, data: registerData }] =
    useUserAuthorizedMutation();

  // Submit register
  const registerSubmit: SubmitHandler<RegisterData> = (data: RegisterData) => {
    const user = {
      name: data.userName,
      email: data.userEmail,
      password: data.userPassword,
    };
    userAuthorize(user);
  };

  const {
    register,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm<RegisterData>({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
  });

  // Go home after register
  useGoHome(registerData, router);

  return [register, handleSubmit, inputErrors, registerSubmit, registerError];
};

const useGoHome = (
  registerData: IUser | undefined,
  router: AppRouterInstance
) => {
  // Go home after register
  useEffect(() => {
    if (registerData) {
      router.push('/');
    }
  }, [registerData, router]);
};
