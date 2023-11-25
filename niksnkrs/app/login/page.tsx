'use client';

import {
  Background,
  ChildTemplate,
  Layout,
  LoginForm,
  ParentTemplate,
  UserForm,
} from '@/components';
import { requiredLogin } from '@/lib/schema';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authenticationUser } from '@/lib/actions/user.actions';
import { selectUser, userInfoAdded } from '../store/features';
import { useDispatch, useSelector } from 'react-redux';

export type LoginData = {
  userEmail: string;
  userPassword: string;
};
export default function Page() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const loginSubmit: SubmitHandler<LoginData> = async (data: LoginData) => {
    const loginData = await authenticationUser({
      email: data.userEmail,
      password: data.userPassword,
    });

    console.log(loginData);

    // if (loginData) dispatch(userInfoAdded(loginData));
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
