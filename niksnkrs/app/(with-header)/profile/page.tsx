import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import {
  addressAdded,
  selectAddress,
  selectUser,
  useGetUserMutation,
  useUserChangedMutation,
} from '@/app/store/features';
import {
  ChildTemplate,
  ParentTemplate,
  UserAddress,
  UserInfo,
} from '@/components';
import { registerSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { SubmitHandler, useForm } from 'react-hook-form';

export type ProfileData = {
  userEmail: string;
  userPassword: string;
  userName: string;
  userConfirmPassword: string;
};
export type AddressData = {
  address: string;
};
export default function Page() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const addressInfo = useAppSelector(selectAddress);

  const router = useRouter();

  // Change profile via api
  const [userChange, { error: profileError, data: profileSuccess }] =
    useUserChangedMutation();

  const [getUser, { data: getUserData }] = useGetUserMutation();

  // Fetch user profile
  useEffect(() => {
    if (userInfo?._id) {
      const user = {
        token: userInfo.token,
      };
      getUser(user);
    }
  }, [getUser, userInfo]);

  // Submit profile
  const profileSubmit: SubmitHandler<ProfileData> = (data: ProfileData) => {
    if (userInfo._id) {
      const user = {
        _id: userInfo._id,
        name: data.userName,
        email: data.userEmail,
        password: data.userPassword,
        token: userInfo.token,
      };
      userChange(user);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm<ProfileData>({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
  });

  // Submit address
  const addressSubmit: SubmitHandler<AddressData> = (data: AddressData) => {
    if (data) {
      const address = {
        address: data.address,
      };
      dispatch(addressAdded(address));
    }
  };

  const {
    register: addressRegister,
    handleSubmit: handleSubmit2,
    setValue,
  } = useForm<AddressData>();

  // Daumn Popup
  const open = useDaumPostcodePopup();

  const addressPopup = useCallback(
    (data: {
      address: string;
      bname: string;
      buildingName: string;
      addressType: string;
    }) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress +=
            extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }

        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }

      setValue('address', fullAddress);
    },
    [setValue]
  );

  // Open address popup
  const addressHandler = useCallback(() => {
    open({ onComplete: addressPopup });
  }, [open, addressPopup]);

  return (
    <ParentTemplate size='s'>
      <ChildTemplate position='centerLeft' size='s'>
        <UserInfo
          profileSuccess={profileSuccess}
          profileError={profileError}
          userInfo={getUserData}
          inputErrors={inputErrors}
          register={register}
          handleSubmit={handleSubmit}
          profileSubmit={profileSubmit}
        />
      </ChildTemplate>
      <ChildTemplate position='centerRight' size='s'>
        <UserAddress
          addressInfo={addressInfo}
          addressHandler={addressHandler}
          register={addressRegister}
          handleSubmit={handleSubmit2}
          addressSubmit={addressSubmit}
        />
      </ChildTemplate>
    </ParentTemplate>
  );
}
