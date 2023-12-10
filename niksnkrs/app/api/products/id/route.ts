import { NextRequest, NextResponse } from 'next/server';
import { getProductById } from '@/lib/actions/products.actions';

export const GET = async (req: NextRequest) => {
  try {
    if (req.method == 'GET') {
      const id = req.nextUrl.searchParams.get('id');

      const product = await getProductById(id);

      return NextResponse.json(product);
    } else {
      throw new Error('Invalid request method');
    }
  } catch (err) {
    return NextResponse.json({ message: `${err}` });
  }
};
