import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { cartAdded } from '../cart/cartSlice';
import {
  ICarts,
  IOrder,
  IProduct,
  IProductId,
  IProducts,
  IUser,
} from '@/app/lib/types';
import { orderAdded } from '../order';
import { userInfoAdded } from '../user';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),

  endpoints: (build) => ({
    getProducts: build.query<IProducts, void>({
      query: () => '/products',
    }),
    getProduct: build.query<IProductId, void>({
      query: (id) => `/products/${id}`,
    }),
    addToCart: build.mutation<IProduct, { id: string; qty: number }>({
      query: ({ id }) => `/products/${id}`,
      async onQueryStarted({ id, qty }, api) {
        if (qty && id) {
          const { dispatch, queryFulfilled } = api;
          const { data } = await queryFulfilled;

          const cartData = {
            product: data._id,
            name: data.name,
            price: data.price,
            countInStock: data.countInStock,
            qty,
          };

          dispatch(cartAdded(cartData));
        }
      },
    }),
    userAuthenticated: build.mutation<
      IUser,
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: `/users/login`,
        method: 'POST',
        body: { email: email, password: password },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      async onQueryStarted({}, api) {
        const { dispatch, queryFulfilled } = api;
        const { data } = await queryFulfilled;

        dispatch(userInfoAdded(data));
      },
    }),
    userAuthorized: build.mutation<
      IUser,
      { name: string; email: string; password: string }
    >({
      query: (user) => ({
        url: `/users/register`,
        method: 'POST',
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      async onQueryStarted(_, api) {
        const { dispatch, queryFulfilled } = api;
        const { data } = await queryFulfilled;

        dispatch(userInfoAdded(data));
      },
    }),
    userChanged: build.mutation<
      IUser,
      {
        _id: string;
        name: string;
        email: string;
        password: string;
        token: string;
      }
    >({
      query: (user) => {
        return {
          url: `/users/profile`,
          method: 'PUT',
          body: JSON.stringify({
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user?.token}`,
          },
        };
      },
      async onQueryStarted(_, api) {
        const { dispatch, queryFulfilled } = api;
        const { data } = await queryFulfilled;

        dispatch(userInfoAdded(data));
      },
    }),
    getUser: build.mutation<IUser, { token: string }>({
      query: (user) => {
        return {
          url: `/users/profile`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user?.token}`,
          },
        };
      },
    }),
    addToOrder: build.mutation<
      IOrder,
      {
        email: string;
        name: string;
        carts: ICarts;
        shippingAddress: {
          address: string;
        };
        paymentMethod: string;
        token: string;
        itemsPrice: string;
        taxPrice: number;
        shippingPrice: number;
        totalPrice: number;
      }
    >({
      query: (order) => {
        return {
          url: `/orders`,
          method: 'POST',
          body: JSON.stringify({
            email: order.email,
            name: order.name,
            orderItems: order.carts,
            shippingAddress: order.shippingAddress,
            paymentMethod: order.paymentMethod,
            itemsPrice: order.itemsPrice,
            taxPrice: order.taxPrice,
            shippingPrice: order.shippingPrice,
            totalPrice: order.totalPrice,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${order?.token}`,
          },
        };
      },
      async onQueryStarted(_, api) {
        const { dispatch, queryFulfilled } = api;
        const { data } = await queryFulfilled;

        dispatch(orderAdded(data));
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddToCartMutation,
  useUserAuthenticatedMutation,
  useUserAuthorizedMutation,
  useUserChangedMutation,
  useGetUserMutation,
  useAddToOrderMutation,
} = api;
