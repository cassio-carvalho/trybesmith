import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public createProduct = async (product: Product): Promise<Product> => {
    const { name, amount } = product;
    const result = await this.connection.query<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, ...product };
  };

  public getAllProducts = async (): Promise<Product[]> => {
    const [products] = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    return products as Product[];
  };

  public updateProducts = async (productsIds: number[], orderId: number) => {
    const q = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
    const result = productsIds.map((id) => this.connection.execute(q, [orderId, id]));
    Promise.all(result);
  };
}

export default ProductModel;
