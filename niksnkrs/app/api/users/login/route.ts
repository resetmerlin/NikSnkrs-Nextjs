import User from '@/lib/models/userModel';
import { connectDatabase } from '@/lib/mongoose';
import { createToken } from '@/lib/tokens';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (
  req: { email: string; password: string },
  res: NextResponse
) => {
  try {
    connectDatabase();

    const { email, password } = req;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return NextResponse.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: createToken(user._id),
      });
    } else {
      throw new Error('Invalid email of password');
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid email or password' },
      { status: 400 }
    );
  }
};
