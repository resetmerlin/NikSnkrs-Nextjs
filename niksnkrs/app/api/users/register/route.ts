import User from '@/lib/models/userModel';
import { connectDatabase } from '@/lib/mongoose';
import { createToken } from '@/lib/tokens';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (
  req: { name: string; email: string; password: string },
  res
) => {
  try {
    connectDatabase();

    const { name, email, password } = req;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(405).json({ message: 'User already exists' });
      throw new Error('User already exists');
    }

    const user = await User.create({
      name,
      email,
      password,
      //we will gonna crypt it
    });

    if (user) {
      NextResponse.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: createToken(user._id),
      });
    } else {
      NextResponse.json({ message: 'Invalid user data' }, { status: 400 });
      throw new Error('Invalid user data');
    }
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 400 });
  }
};
