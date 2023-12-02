import { UseFormReturn } from 'react-hook-form';
import {
  AtomicButton,
  AtomicInput,
  AtomicLabel,
  AtomicTitle,
} from '../../atoms';
import './UserAddress.scss';
import { AddressData } from '@/app/(with-header)/profile/page';

type IProps = {
  addressHandler: () => void;
  addressInfo: {
    address: string;
  };
  register: UseFormReturn<AddressData>['register'];
  handleSubmit: UseFormReturn<AddressData>['handleSubmit'];
  addressSubmit: (data: AddressData) => void;
};

/**
 * Responsible for making user address organisms
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
export default function UserAddress({
  addressHandler,
  register,
  handleSubmit,
  addressSubmit,
  addressInfo,
}: IProps) {
  return (
    <form className='userAddress' onSubmit={handleSubmit(addressSubmit)}>
      <div>
        <AtomicTitle size='xs'>User address:</AtomicTitle>
        <AtomicButton
          type='button'
          size='m'
          shape='normal'
          color='secondary'
          onClick={addressHandler}
        >
          Get Location
        </AtomicButton>
      </div>

      <AtomicLabel htmlFor='address'>Address</AtomicLabel>
      <AtomicInput
        type='name'
        name='address'
        register={register}
        placeholder={addressInfo?.address}
      />

      <AtomicButton type='submit' size='m' shape='normal'>
        Update Address
      </AtomicButton>
    </form>
  );
}
