import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// const validateToken = (req: Request, res: Response, next: NextFunction) => {
//   const { authorization } = req.headers;
//   const verifyToken = auth(authorization as string);
//   const decodeToken = (jwt.decode(authorization as string));

//   console.log(`VerifyToken = ${Object.values(verifyToken)}`);
//   console.log(`decodeToken = ${Object.values(decodeToken as string)}`);
  
//   // console.log(`Token AUTHORIZATION ${authorization}`);
  
//   if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }

//   try {
//     jwt.verify(authorization as string, process.env.JWT_SECRET as string);
//     req.body.userId = (jwt.decode(authorization) as JwtPayload).payload.id;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  // console.log(`Token AUTHORIZATION ${authorization}`);
  
  if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }

  try {
    const payload = jwt.verify(authorization as string, process.env.JWT_SECRET as string);
    const { id } = payload as JwtPayload;
    console.log(`Id payload ${id}`);
    
    // req.body.userId = (jwt.decode(authorization) as JwtPayload).payload.id;
    req.body.userId = id;
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
//     console.log(`user validate token: ${Object.values(user)}`);
    
//     res.locals.user = user;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// };

export default validateToken;