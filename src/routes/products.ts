// src/routes/products.ts
import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController';
import requestLogger from '../middleware/requestLogger';

const router = express.Router();

// Apply middleware for logging requests
router.use(requestLogger);

// Define routes
router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
