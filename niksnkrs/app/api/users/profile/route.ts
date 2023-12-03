import jwt from 'jsonwebtoken';
import User from '@/lib/models/userModel';
import { connectDatabase } from '@/lib/mongoose';
import { NextResponse } from 'next/server';
import { createToken } from '@/lib/tokens';

export const GET = async (req: Request, res: NextResponse) => {
  try {
    if (req.method !== 'GET') throw new Error('Invalid request method');

    connectDatabase();

    const authorization = req.headers.get('authorization');

    const token = authorization?.split(' ')[1];
    if (!token) {
      return NextResponse.json(
        { message: 'No token provided' },
        { status: 400 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select('-password');

    if (user) {
      const userInfo = {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      };
      return NextResponse.json(userInfo);
    } else
      return NextResponse.json({ message: 'User not found' }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    if (req.method !== 'PUT') throw new Error('Invalid request method');

    connectDatabase();

    const body = await req.json();

    const authorization = req.headers.get('authorization');

    const token = authorization?.split(' ')[1];
    if (!token) {
      return NextResponse.json(
        { message: 'No token provided' },
        { status: 400 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select('-password');

    if (user) {
      user.name = body.user.name || user.name;
      user.email = body.user.email || user.email;
      if (body.user.password) {
        user.password = body.user.password;
      }

      const updatedClient = await user.save();
      return {
        _id: updatedClient._id,
        name: updatedClient.name,
        email: updatedClient.email,
        isAdmin: updatedClient.isAdmin,
        token: createToken(updatedClient._id),
      };
    } else {
      return NextResponse.json({ message: 'User not found' }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
};
