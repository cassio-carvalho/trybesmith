import Order from '../interfaces/order.interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';

class OrderService {
  private model: OrderModel;

  private productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public getAllOrders = async (): Promise<Order[]> => {
    const result = await this.model.getAllOrders();
    
    return result;
  };

  public createNewOrder = async (userId: number, productsIds:number[]): Promise<void> => {
    const orderId = await this.model.createNewOrder(userId);
    console.log(`Service orderId: ${orderId}`);
    
    await Promise.all(productsIds
      .map((id) => this.model.updateOrder(id, orderId)));
    // .map((id) => this.productModel.updateProducts(id, orderId)));
  };
}

export default OrderService;