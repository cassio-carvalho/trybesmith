import { Router } from 'express';
import UserController from '../controllers/user.controller';
// import validateLogin from '../middlewares/validate.login';
import validateUser from '../middlewares/validateUser';

const user = Router();

const userControler = new UserController();

user.post('/users', validateUser, userControler.createUser);

export default user;
