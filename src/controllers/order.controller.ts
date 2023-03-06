import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAllOrders = async (req: Request, res: Response) => {
    const result = await this.service.getAllOrders();

    return res.status(200).json(result);
  };
}

export default OrderController;