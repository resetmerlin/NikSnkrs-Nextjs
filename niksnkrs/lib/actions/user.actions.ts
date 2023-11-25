'use server';

import { createToken } from '../tokens';
import { connectDatabase } from '../mongoose';
import User from '../models/userModel';

// @desc Auth user & get token
// @access  Public
const authenticationUser = async (req: { email: string; password: string }) => {
  try {
    connectDatabase();

    const { email, password } = req;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: createToken(user._id),
      };
    } else throw new Error('Invalid email of password');
  } catch (error) {
    console.error('Invalid email of password', error);
    throw error;
  }
};
// @desc Register a new user
// @access  Public
const registerUser = async (req: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    connectDatabase();

    const { name, email, password } = req;

    const userExistence = await User.findOne({ email });

    if (userExistence) {
      throw new Error('User already exists');
    }

    const user = await User.create({
      name,
      email,
      password,
      //we will gonna crypt it
    });

    if (user) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: createToken(user._id),
      };
    } else {
      throw new Error('Invalid user data');
    }
  } catch (error) {
    console.error(error);
  }
};

///@desc GET user profile
// @access  Private
const getClientProfile = async (req: { user: { _id: string } }) => {
  try {
    connectDatabase();

    const user = await User.findById(req.user._id);

    if (user) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      };
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error(error);
  }
};

///@desc Update user profile
// @access  Private
const updateClientProfile = async (req: {
  user: { _id: string; name: string; email: string; password: string };
}) => {
  try {
    connectDatabase();

    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.user.name || user.name;
      user.email = req.user.email || user.email;
      if (req.user.password) {
        user.password = req.user.password;
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
      throw new Error('User not found');
    }
  } catch (error) {
    console.error(error);
  }
};
export {
  authenticationUser,
  getClientProfile,
  updateClientProfile,
  registerUser,
};
