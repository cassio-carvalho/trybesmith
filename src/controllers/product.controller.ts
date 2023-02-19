import { Request, Response } from 'express';

import ProductsService from '../services/product.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const createdProduct = await this.productsService.createProduct(product);
    return res.status(201).json(createdProduct);
  };

  public getAllProducts = async (_req: Request, res: Response) => {
    const result = await this.productsService.getAllProducts();
    return res.status(200).json(result);
  };
}

export default ProductsController; 
