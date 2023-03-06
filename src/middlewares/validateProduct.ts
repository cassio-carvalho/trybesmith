import { NextFunction, Request, Response } from 'express';
import addProduct from './product.schema';

const validateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const { error } = addProduct.validate({ name, amount });

  if (error) {
    // https://github.com/hapijs/joi/blob/v17.4.0/API.md#list-of-errors
    // se o tipo de erro é any.required, significa que um dos campos obrigatórios não foi fornecido
    if (error.details[0].type === 'any.required') {
      const { message } = error;
      return res.status(400).json({ message });
    }
    const { message } = error;
    return res.status(422).json({ message });
  }

  next();
};

export default validateProduct;