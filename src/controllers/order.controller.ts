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
    console.log(`Body: ${req.body}`);
    
    // const { productsIds } = req.body;
    // const userId = Object.values(res.locals.user);
    // console.log(`productsIds, userIds: ${productsIds}; ${userId}`);
    
    // console.log(`CreateNewOrder ${await this.service.createNewOrder(productsIds, userId)}`);
    await this.service.createNewOrder(userId, productsIds);
    
    return res.status(201).json({ userId, productsIds });
  };
}

export default OrderController;