import User from '../interfaces/user.interface';
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
}

export default UserService;