import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import ValidateProductsIds from '../middlewares/validate.productsIds';
// import validateProductId from '../middlewares/validate.productsIds';
import validateToken from '../middlewares/validateToken';

const orders = Router();

const orderController = new OrderController();

const { validateProductIds } = new ValidateProductsIds();

orders.get('/orders', orderController.getAllOrders);

// console.log(`Log validateToken rota: ${validateToken}`);

orders.post('/orders', validateToken, validateProductIds, orderController.createNewOrder);

export default orders;