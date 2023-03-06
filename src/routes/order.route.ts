import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const orders = Router();

const orderController = new OrderController();

orders.get('/orders', orderController.getAllOrders);

export default orders;