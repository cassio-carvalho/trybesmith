import { NextFunction, Request, Response } from 'express';

export default class ValidateProductsIds {
  validateProductIds = (req:Request, res:Response, next:NextFunction) => {
    const productsId: [] = req.body.productsIds;
    if (!productsId) {
      return res.status(400).json({ message: '"productsIds" is required' });
    }
    if (!Array.isArray(productsId)) {
      return res.status(422).json({ message: '"productsIds" must be an array' });
    }
    if (!productsId.length) {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }
    next();
  };
}

// import verifyProductsIds from './productsId.schema';

// const validateProductId = (productsIds: number[]) => {
//   const { error } = verifyProductsIds.validate(productsIds);
//   if (error) {
//     return { type: 422, message: error.message };
//   }

//   return { type: null, message: '' };
// };

// export default validateProductId;