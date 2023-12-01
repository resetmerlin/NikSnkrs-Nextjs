import { authenticationUser } from '@/lib/actions/user.actions';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: NextResponse) => {
  try {
    if (req.method !== 'POST') throw new Error('Invalid request method');

    const body = await req.json();
    const auth = authenticationUser(body);

    return NextResponse.json(auth);
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
};
