import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET || 'senha';

const auth = (token: string) => jwt.verify(token, secret);

export default auth;