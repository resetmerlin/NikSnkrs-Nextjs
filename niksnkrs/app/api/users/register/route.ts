import { registerUser } from '@/lib/actions/user.actions';
import User from '@/lib/models/userModel';
import { connectDatabase } from '@/lib/mongoose';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    if (req.method !== 'POST') throw new Error('Invalid request method');

    const body = await req.json();

    const user = await registerUser(body);

    return NextResponse.json(user);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};
