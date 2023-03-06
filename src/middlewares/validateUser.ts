import { NextFunction, Request, Response } from 'express';
import addUser from './user.schema';

const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;
  const { error } = addUser.validate({ username, vocation, level, password });

  if (error) {
    if (error.details[0].type === 'any.required') {
      const { message } = error;
      return res.status(400).json({ message });
    }
    const { message } = error;
    return res.status(422).json({ message });
  }

  next();
};

export default validateUser;