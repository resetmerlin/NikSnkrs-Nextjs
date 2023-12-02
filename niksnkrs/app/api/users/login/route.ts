import { authenticationUser } from '@/lib/actions/user.actions';
import User from '@/lib/models/userModel';
import { connectDatabase } from '@/lib/mongoose';
import { createToken } from '@/lib/tokens';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: NextResponse) => {
  try {
    if (req.method !== 'POST') throw new Error('Invalid request method');

    connectDatabase();

    const body = await req.json();
    const { email, password } = body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const userInfo = {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: createToken(user._id),
      };
      return NextResponse.json(userInfo);
    } else
      return NextResponse.json(
        { message: 'Invalid email of password' },
        { status: 400 }
      );
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
};
