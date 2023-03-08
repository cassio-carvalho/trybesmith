import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Login from '../interfaces/login.interface';
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

  public async getUser(login: Login): Promise<User[]> {
    const { username, password } = login;
    const [result] = await this.connection
      .execute<(
    User[] & RowDataPacket[])>(`
      SELECT * FROM Trybesmith.users
      WHERE username = ? AND password = ?;`,
      [username, password],
      );
    return result;
  }
}

export default UserModel;