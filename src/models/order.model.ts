import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAllOrders = async (): Promise<Order[]> => {
    const q = (
      `SELECT O.id, O.user_id AS userId, JSON_ARRAYAGG(P.id) AS productsIds
      FROM Trybesmith.products AS P
      INNER JOIN Trybesmith.orders AS O ON P.order_id = O.id 
      GROUP BY O.id
      ORDER BY O.user_id ASC`
    );

    const [result] = await this.connection.query(q);
    return result as Order[];
  }; 

  public async createNewOrder(userId: number): Promise<number> {
    console.log(`User Id => ${userId}`);
    const q = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(q, [userId]);
    
    return insertId;
  }

  public async updateOrder(productId: number, orderId: number): Promise<void> {
    await this.connection.execute(
      `UPDATE Trybesmith.products
      SET order_id = ?
      WHERE id = ?`,
      [orderId, productId],
    );
  }
}

export default OrderModel;