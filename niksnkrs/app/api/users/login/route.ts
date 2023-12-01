import { authenticationUser } from '@/lib/actions/user.actions';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: NextResponse) => {
  try {
    if (req.method == 'POST') {
      const auth = await authenticationUser(req.body);

      return NextResponse.json(auth);
    } else {
      throw new Error('Invalid request method');
    }
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
};
