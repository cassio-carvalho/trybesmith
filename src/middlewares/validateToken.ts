import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }

  try {
    jwt.verify(authorization as string, process.env.JWT_SECRET as string);
    req.body.userId = (jwt.decode(authorization) as JwtPayload).payload.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// import { NextFunction, Request, Response } from 'express';
// import auth from './auth';

// const validateToken = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const token = req.headers.authorization;
//     if (!token) {
//       return res.status(401).json({ message: 'Token not found' });
//     }
//     const user = auth(token);
//     res.locals.user = user;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// };

// export default validateToken;