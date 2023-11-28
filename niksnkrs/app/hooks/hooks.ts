import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { userInfoDeleted } from '../store/features';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/** Logout; Delete userInfo state  */
export function logOut(dispatch: AppDispatch) {
  dispatch(userInfoDeleted());
}
