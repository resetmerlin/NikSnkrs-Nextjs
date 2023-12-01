'use client';

import {
  Background,
  ChildTemplate,
  Layout,
  LoginForm,
  ParentTemplate,
  UserForm,
} from '@/components';
import React from 'react';
import { useLoginPage } from './page.hook';

export type LoginData = {
  userEmail: string;
  userPassword: string;
};
export default function Page() {
  const [inputErrors, handleSubmit, loginSubmit, register, loginError] =
    useLoginPage();

  return (
    <ParentTemplate size='full'>
      <ChildTemplate size='full' position='leftRight'>
        <Background />
      </ChildTemplate>
      <ChildTemplate size='full' position='right'>
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
