import { ResultSetHeader } from 'mysql2';
import { IUserRepository } from '../IUsersRepository';
import Connection from '../../Connection';
import { IUser, UserCredentials, UserDTO } from '../../../interfaces/IUser';

export default class MySqlUserRepository implements IUserRepository {
  getUserById = async (id: number): Promise<UserDTO[]> => {
    const [rows] = await Connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE id = ?',
      [id],
    );

    return rows as UserDTO[];
  };

  getUserByUser = async ({ username, password }: UserCredentials): Promise<UserDTO[]> => {
    const [rows] = await Connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );

    return rows as UserDTO[];
  };

  createUser = async ({ username, classe, level, password }: IUser): Promise<UserDTO> => {
    const [{ insertId }] = await Connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return { id: insertId, username, classe, level } as UserDTO;
  };
}