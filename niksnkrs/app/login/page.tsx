import {
  Background,
  ChildTemplate,
  Layout,
  ParentTemplate,
  UserForm,
} from '@/components';
import React from 'react';

export default function Page() {
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
              loginError={loginError}
            />
          </UserForm>
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
