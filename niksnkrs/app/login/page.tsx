'use client';

import {
  Background,
  ChildTemplate,
  Layout,
  LoginForm,
  ParentTemplate,
  UserForm,
} from '@/components';
import { loginSchema, requiredLogin } from '@/lib/schema';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export type LoginData = {
  userEmail: string;
  userPassword: string;
};
export default function Page() {
  const loginSubmit: SubmitHandler<LoginData> = (data: LoginData) => {
    console.log({ email: data.userEmail, password: data.userPassword });
  };

  const {
    register,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm<LoginData>({
    mode: 'onChange',
    resolver: zodResolver(requiredLogin),
  });

  return (
    <Layout>
      <ParentTemplate size='full'>
        <ChildTemplate size='full' position='leftRight'>
          <Background />
        </ChildTemplate>
        <ChildTemplate size='full' position='right'>
          <UserForm>
            <LoginForm
              inputErrors={inputErrors}
              handleSubmit={handleSubmit}
              loginSubmit={loginSubmit}
              register={register}
            />
          </UserForm>
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
