'use client';

import { logOut, useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { selectOrder, selectUser } from '@/app/store/features';
import {
  ChildTemplate,
  HeaderLayout,
  OrderInfo,
  ParentTemplate,
} from '@/components';
import { IOrder } from '@/lib/types';
import { useParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

export default function Page() {
  const dispatch = useAppDispatch();
  const order: IOrder = useAppSelector(selectOrder);
  const [paypalPaid, setPaypalPaid] = useState(false);

  // Check user paid
  const checkPaid = () => {
    setPaypalPaid(true);
  };

  const [clientId, setClientId] = useState('');
  const { id: orderId } = useParams();

  const date = new Date();

  const dateHandler = new Intl.DateTimeFormat('en-kr', {
    dateStyle: 'full',
  });

  // Fetch Paypal Client ID and store into State
  useEffect(() => {
    const getClientId = async () => {
      try {
        const response = await fetch(`/api/config/paypal`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const clientId = await response.text();

        setClientId(clientId);
      } catch (error) {
        console.error('Error fetching PayPal client ID:', error);
      }
    };
    if (order?._id == orderId) {
      if (paypalPaid == false) getClientId();
    }
  }, [order, orderId, paypalPaid]);

  return (
    <ParentTemplate size='s'>
      <ChildTemplate position='center' size='full'>
        <OrderInfo
          paypalPaid={paypalPaid}
          order={order}
          checkPaid={checkPaid}
          clientId={clientId}
          currentDate={dateHandler.format(date)}
        />
      </ChildTemplate>
    </ParentTemplate>
  );
}
