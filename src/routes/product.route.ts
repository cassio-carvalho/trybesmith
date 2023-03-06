import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validateProduct from '../middlewares/validateProduct';

const router = Router();

const productControler = new ProductController();

router.post('/products', validateProduct, productControler.createProduct);

router.get('/products', productControler.getAllProducts);

export default router;