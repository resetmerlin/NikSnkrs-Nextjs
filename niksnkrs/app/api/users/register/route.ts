import User from '@/lib/models/userModel';
import { connectDatabase } from '@/lib/mongoose';
import { createToken } from '@/lib/tokens';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (
  req: {
    body: { name: string; email: string; password: string };
  },
  res
) => {
  await connectDatabase();

  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 401 }
      );
    }

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email, and password are required' },
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
      return NextResponse.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: createToken(user._id),
      });
    } else {
      return NextResponse.json(
        { message: 'Invalid user data' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};
