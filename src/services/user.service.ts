import Login from '../interfaces/login.interface';
import LoginResponse from '../interfaces/loginResponse.interface';
import User from '../interfaces/user.interface';
import generateToken from '../middlewares/generateToken';
import connection from '../models/connection';
import UserModel from '../models/user.model';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public createUser = async (user: User): Promise<User> => {
    const result = await this.model.create(user);
    return result;
  };

  public async getUser(user: Login): Promise<LoginResponse> {
    const users = await this.model.getUser(user);
    if (users.length !== 0) {
      const token = generateToken(users[0]);
      return { status: 200, token, error: null };
    }
    const message = 'Username or password invalid';
    return { status: 401, error: { message } };
  }
}

export default UserService;