import dotenv from 'dotenv';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

dotenv.config();

const secret = process.env.JWT_SECRET || '';

const generateToken = (user: User) => {
  const payload = {
    id: user.id,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
    password: user.password,
  } as JwtPayload;

  const token = jwt.sign(payload, secret);

  return token;
};

export default generateToken;