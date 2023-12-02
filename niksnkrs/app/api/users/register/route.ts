import { registerUser } from '@/lib/actions/user.actions';
import User from '@/lib/models/userModel';
import { connectDatabase } from '@/lib/mongoose';
import { createToken } from '@/lib/tokens';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    if (req.method !== 'POST') throw new Error('Invalid request method');
    connectDatabase();

    const body = await req.json();

    const { name, email, password } = body;
    const userExistence = await User.findOne({ email });

    if (userExistence) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    const user = await User.create({
      name,
      email,
      password,
      //we will gonna crypt it
    });

    if (user) {
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
        { message: 'Invalid user data' },
        { status: 400 }
      );
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};
