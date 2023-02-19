import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productControler = new ProductController();

router.post('/products', productControler.createProduct);

router.get('/products', productControler.getAllProducts);

export default router;