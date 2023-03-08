import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import ValidateProductsIds from '../middlewares/validate.productsIds';
// import validateProductId from '../middlewares/validate.productsIds';
import validateToken from '../middlewares/validateToken';

const orders = Router();

const orderController = new OrderController();

const { validateProduct } = new ValidateProductsIds();

orders.get('/orders', orderController.getAllOrders);

orders.post('/orders', validateToken, validateProduct, orderController.createNewOrder);

export default orders;