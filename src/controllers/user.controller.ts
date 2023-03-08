import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Login from '../interfaces/login.interface';
import UserService from '../services/user.service';

const secret = process.env.JWT_SECRET || 'senha';

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public createUser = async (req: Request, res: Response) => {
    const result = await this.service.createUser(req.body);
    const { id, username } = result;
    const payload = { data: { id, username } };
    const token = jwt.sign(payload, secret);

    return res.status(201).json({ token });
  };

  public userLogin = async (req: Request<unknown, unknown, Login>, res: Response) => {
    const { error, status, token } = await this.service.getUser(req.body);
    if (error) {
      return res.status(status).json(error);
    }
    res.status(200).json({ token });
  };
}

export default UserController;