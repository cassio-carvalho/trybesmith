import Order from '../interfaces/order.interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAllOrders = async (): Promise<Order[]> => {
    const result = await this.model.getAllOrders();
    
    return result;
  };
}

export default OrderService;