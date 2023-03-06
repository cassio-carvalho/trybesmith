import { Router } from 'express';
import UserController from '../controllers/user.controller';

const user = Router();

const userControler = new UserController();

user.post('/users', userControler.createUser);

export default user;
