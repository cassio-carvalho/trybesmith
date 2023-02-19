import Product from '../interfaces/interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public createProduct = async (product: Product): Promise<Product> => {
    const result = await this.model.createProduct(product);
    return result;
  };

  public getAllProducts = async (): Promise<Product[]> => {
    const result = await this.model.getAllProducts();
    return result;
  };
}

export default ProductService;