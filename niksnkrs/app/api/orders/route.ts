import { orderModel } from '@/lib/models';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const body = await req.json();

    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      email,
      name,
      user,
    } = body;

    if (orderItems && orderItems.length === 0) {
      return NextResponse.json({ message: 'No order items' }, { status: 400 });
    } else {
      const order = new orderModel({
        orderItems,
        user: user?._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        email,
        name,
      });

      const createdOrder = await order.save();

      return NextResponse.json(createdOrder);
    }
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};
