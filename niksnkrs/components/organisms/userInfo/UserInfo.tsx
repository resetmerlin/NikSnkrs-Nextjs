import { UseFormReturn } from 'react-hook-form';
import {
  AtomicButton,
  AtomicInput,
  AtomicLabel,
  AtomicTitle,
} from '../../atoms';
import './UserInfo.scss';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { ProfileData } from '@/app/(with-header)/profile/page';
import { IUser } from '@/lib/types';

type IProps = {
  profileSubmit: (data: ProfileData) => void;
  register: UseFormReturn<ProfileData>['register'];
  handleSubmit: UseFormReturn<ProfileData>['handleSubmit'];
  inputErrors: UseFormReturn<ProfileData>['formState']['errors'];
  profileSuccess: IUser | undefined;
  profileError: undefined | FetchBaseQueryError | SerializedError;
  userInfo: IUser | undefined;
};

/**
 * Responsible for making user info organisms
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
export default function UserInfo({
  register,
  handleSubmit,
  profileSubmit,
  inputErrors,
  profileSuccess,
  profileError,
  userInfo,
}: IProps) {
  return (
    <form className='userInfo' onSubmit={handleSubmit(profileSubmit)}>
      <div>
        <AtomicTitle size='xs'>User Info:</AtomicTitle>
        {profileSuccess && (
          <p className='userInfo__success'>Updated Successfully!</p>
        )}
        {profileError && 'data' in profileError && (
          <p>
            {(profileError as { data: { message: string } })?.data?.message}
          </p>
        )}
      </div>
      <AtomicLabel htmlFor='userEmail'>Enter Email</AtomicLabel>
      <AtomicInput
        type='email'
        name='userEmail'
        register={register}
        placeholder={userInfo?.email}
      />

      {inputErrors?.['userEmail'] && (
        <p>{inputErrors?.['userEmail'].message}</p>
      )}

      <AtomicLabel htmlFor='userName'>Enter name</AtomicLabel>

      <AtomicInput
        type='name'
        name='userName'
        register={register}
        placeholder={userInfo?.name}
      />

      {inputErrors?.['userName'] && <p>{inputErrors?.['userName'].message}</p>}

      <AtomicLabel htmlFor='userPassword'>Enter password</AtomicLabel>
      <AtomicInput type='password' name='userPassword' register={register} />

      {inputErrors?.['userPassword'] && (
        <p>{inputErrors?.['userPassword'].message}</p>
      )}

      <AtomicLabel htmlFor='userConfirmPassword'>Confirm password</AtomicLabel>
      <AtomicInput
        type='password'
        name='userConfirmPassword'
        register={register}
      />
      {inputErrors?.['userConfirmPassword'] && (
        <p>{inputErrors?.['userConfirmPassword'].message}</p>
      )}
      <AtomicButton type='submit' size='m' shape='normal'>
        Update
      </AtomicButton>
    </form>
  );
}
