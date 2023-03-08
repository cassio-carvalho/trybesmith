import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateLogin from '../middlewares/validate.login';

const login = Router();

const userControler = new UserController();

login.post('/login', validateLogin, userControler.userLogin);

export default login;