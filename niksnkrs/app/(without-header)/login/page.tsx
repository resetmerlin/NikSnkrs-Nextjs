'use client';

import {
  Background,
  ChildTemplate,
  LoginForm,
  ParentTemplate,
  UserForm,
} from '@/components';
import React, { useEffect } from 'react';
import { useAppSelector } from '@/app/hooks/hooks';
import { useRouter } from 'next/navigation';
import { selectUser, useUserAuthenticatedMutation } from '@/app/store/features';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IUser, requiredLogin } from '@/lib';

export type LoginData = {
  userEmail: string;
  userPassword: string;
};
export default function Page() {
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
  useEffect(() => {
    if (userInfo.token && userInfo._id) {
      router.push('/');
    }
  }, [userInfo, router]);

  return (
    <ParentTemplate size="full">
      <ChildTemplate size="full" position="leftRight">
        <Background />
      </ChildTemplate>
      <ChildTemplate size="full" position="right">
        <UserForm>
          <LoginForm
            loginError={loginError}
            inputErrors={inputErrors}
            handleSubmit={handleSubmit}
            loginSubmit={loginSubmit}
            register={register}
          />
        </UserForm>
      </ChildTemplate>
    </ParentTemplate>
  );
}
