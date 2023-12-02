import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { userInfoDeleted } from '../store/features';
import { IUser } from '@/lib/types';
import { useEffect } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/** Logout; Delete userInfo state  */
export function logOut(dispatch: AppDispatch) {
  dispatch(userInfoDeleted());
}

export function useGoToLogin(userInfo: IUser, router: AppRouterInstance) {
  useEffect(() => {
    if (!userInfo?.token) {
      router.push('/login');
    }
  }, [router, userInfo]);
}
