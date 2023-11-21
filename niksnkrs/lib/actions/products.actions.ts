'use server';

import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { productModel } from '../models';
import { connectDatabase } from '../mongoose';

// @desc Fetch all products
// @access  Public
const getProducts = async () => {
  try {
    connectDatabase();

    const products = await productModel.find({});

    return products;
  } catch (error) {
    //custom error handler
    throw new Error('Products not found');
  }
};

// @desc Fetch single product
// @access  Public
const getProductById = async (id: string) => {
  try {
    connectDatabase();

    // params.id was before
    const product = await productModel.findById(id);

    return product;
  } catch (error: { message: string } | any) {
    // Handle the error
    //custom error handler
    throw new Error('Product not found');
  }
};

export { getProducts, getProductById };
