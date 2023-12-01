import { NextRequest, NextResponse } from 'next/server';
import { getProducts } from '@/lib/actions/products.actions';

export const GET = async (req: NextRequest) => {
  try {
    if (req.method == 'GET') {
      const products = await getProducts();

      if (products && products.length > 0) {
        return NextResponse.json(products);
      } else {
        throw new Error('Products not found');
      }
    } else {
      throw new Error('Invalid request method');
    }
  } catch (err) {
    return NextResponse.json({ message: `${err}` });
  }
};
