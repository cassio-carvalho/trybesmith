import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;

    const q = (
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)'
    );

    const result = await this.connection.query<ResultSetHeader>(
      q, 
      [username, vocation, level, password],
    );

    const [data] = result;
    const { insertId } = data;
    return { id: insertId, ...user };
  }
}

export default UserModel;