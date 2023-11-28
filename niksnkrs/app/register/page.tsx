'use client';
import {
  Background,
  ChildTemplate,
  Layout,
  ParentTemplate,
  RegisterForm,
  UserForm,
} from '@/components';
import React from 'react';
import { useRegisterPage } from './page.hook';

export default function Page() {
  const [register, handleSubmit, inputErrors, registerSubmit, registerError] =
    useRegisterPage();

  return (
    <Layout>
      <ParentTemplate size='full'>
        <ChildTemplate size='full' position='leftRight'>
          <Background />
        </ChildTemplate>
        <ChildTemplate size='full' position='right'>
          <UserForm>
            <RegisterForm
              register={register}
              handleSubmit={handleSubmit}
              inputErrors={inputErrors}
              registerSubmit={registerSubmit}
              registerError={registerError}
            />
          </UserForm>
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
