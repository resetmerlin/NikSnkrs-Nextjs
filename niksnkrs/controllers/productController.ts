import { NextApiRequest, NextApiResponse } from 'next';
import productModel from '../models/productModel';
import { NextResponse } from 'next/server';

// @desc Fetch all products
// @route GET /api/products
// @access  Public
const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await productModel.find({});
    NextResponse.json(products);
  } catch (error) {
    NextResponse.json({ status: 404 });
    //custom error handler
    throw new Error('Products not found');
  }
};

// @desc Fetch single product
// @route GET /api/products/:id
// @access  Public
const getProductById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // params.id was before
    const cyberProduct = await productModel.findById(req.query.id);

    if (!cyberProduct) {
      res.status(404);
      throw new Error('Product not found');
    }

    NextResponse.json(cyberProduct);
  } catch (error: { message: string } | any) {
    // Handle the error
    NextResponse.json({ status: 500 });
    NextResponse.json({ message: error.message });
  }
};

export { getProducts, getProductById };
