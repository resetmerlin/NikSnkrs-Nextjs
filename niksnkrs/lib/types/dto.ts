export interface IProduct {
  _id: string;
  user: string;

  name: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  threeValue: number;
  price: number;

  countInStock: number;
  review: string;
  __v: number;
  createAt: string;
  updatedt: string;
}

export type IProducts = IProduct[];

export interface IProductId extends Pick<IProduct, '_id'> {}

export type IUser = {
  email: string;
  isAdmin: boolean;
  name: string;
  token: string;
  _id: string;
};

export interface ICart
  extends Pick<IProduct, 'name' | 'price' | 'countInStock'> {
  qty: number;
  product: IProduct['_id'];
}
export type ICarts = ICart[];

export type IUsers = IUser[]; // An array of user objects

export type IAddress = {
  address: string;
};

export type IOrder = {
  shippingAddress: {
    address: string;
  };
  _id: string;
  user: IUser;
  email: string;
  name: string;
  orderItems: ICart;
  paymentMethod: string;
  productPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: string;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
