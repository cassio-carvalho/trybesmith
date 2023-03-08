import { Request, Response } from 'express';
import OrderService from '../services/order.service';

// const secret = process.env.JWT_SECRET || 'senha';

class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAllOrders = async (req: Request, res: Response) => {
    const result = await this.service.getAllOrders();

    return res.status(200).json(result);
  };

  public createNewOrder = async (req: Request, res: Response) => {
    const { productsIds, userId } = req.body;
    await this.service.createNewOrder(productsIds, userId);
    return res.status(201).json({ userId, productsIds });
  };
}

export default OrderController;