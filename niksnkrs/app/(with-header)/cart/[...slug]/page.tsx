'use client';

import { logOut, useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import {
  cartDeleted,
  selectAddress,
  selectCart,
  selectUser,
  useAddToCartMutation,
  useAddToOrderMutation,
} from '@/app/store/features';
import {
  AtomicTitle,
  Cart,
  CartAddress,
  CartSummary,
  ChildTemplate,
  ParentTemplate,
} from '@/components';
import { IAddress, ICart, ICarts, IUser } from '@/lib/types';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useMemo } from 'react';

export default function CartSlugPage() {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const searchParams = useSearchParams();
  const qty = Number(searchParams.get('qty'));

  const [addToOrder, { data: orderData }] = useAddToOrderMutation();

  const carts: ICarts = useAppSelector(selectCart);
  const userInfo: IUser = useAppSelector(selectUser);
  const address: IAddress = useAppSelector(selectAddress);

  const { slug } = useParams();
  const id = slug && slug[0];

  /** fetch chosen product */
  const [addToCart] = useAddToCartMutation();
  /** Delete product on cart */
  const deletOnCart = useCallback(
    (product: ICart['product']) => dispatch(cartDeleted(product)),
    [dispatch]
  );

  // Numbers for the payment summary
  const taxPrice = 15;
  const shippingPrice = 3;
  const productPrice = useMemo(
    () =>
      carts
        .reduce((acc, item) => acc + Number(item?.qty) * Number(item?.price), 0)
        .toFixed(1),
    [carts]
  );

  const date = new Date();
  const dateFormat = new Intl.DateTimeFormat('en-kr', {
    dateStyle: 'full',
  });

  const paymentMethod = 'paypal';

  const totalPrice = useMemo(
    () => +productPrice - taxPrice - shippingPrice,
    [productPrice, taxPrice, shippingPrice]
  );

  // Add to Order
  const addToOrderHandler = useCallback(() => {
    const order = {
      email: userInfo?.email,
      name: userInfo?.name,
      carts,
      shippingAddress: {
        address: address?.address,
      },
      paymentMethod,
      itemsPrice: productPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      token: userInfo?.token,
    };

    addToOrder(order);
  }, [
    userInfo?.email,
    userInfo?.name,
    userInfo?.token,
    carts,
    address?.address,
    productPrice,
    totalPrice,
    addToOrder,
  ]);

  useEffect(() => {
    if (orderData) {
      router.push(`/order/${orderData._id}`);
    }
  }, [orderData, router]);

  useEffect(() => {
    if (id && qty) {
      addToCart({ id, qty });
    }
  }, [addToCart, id, qty]);

  return (
    <ParentTemplate size='m'>
      <ChildTemplate position='topLeft' size='m'>
        <AtomicTitle size='xs'>Cart</AtomicTitle>
      </ChildTemplate>
      <ChildTemplate position='centerLeft' size='m'>
        <Cart cartProducts={carts} deletOnCart={deletOnCart} />
      </ChildTemplate>

      <ChildTemplate position='right' size='m'>
        <CartSummary
          taxPrice={taxPrice}
          shippingPrice={shippingPrice}
          productPrice={productPrice}
          totalPrice={totalPrice}
          paymentMethod={paymentMethod}
          qty={carts.length}
          currentDate={dateFormat.format(date)}
          addToOrderHandler={addToOrderHandler}
        />
      </ChildTemplate>

      <ChildTemplate position='bottomLeft' size='m'>
        <CartAddress address={address} />
      </ChildTemplate>
    </ParentTemplate>
  );
}
