// src/controllers/productsController.ts
import { Request, Response } from 'express';

// Example data (replace with a database in a real application)
let products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
];

export const getProducts = (req: Request, res: Response) => {
  res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
};

export const createProduct = (req: Request, res: Response) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const updateProduct = (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const updatedProduct = req.body;
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products[index] = { ...products[index], ...updatedProduct };

  res.json(products[index]);
};

export const deleteProduct = (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  products = products.filter((p) => p.id !== productId);
  res.json({ message: 'Product deleted successfully' });
};
