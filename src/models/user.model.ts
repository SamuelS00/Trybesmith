import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interface/user.interface';
import createToken from '../services/jwt.service';
import 'express-async-errors';
import Token from '../types/token';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getById(id: number): Promise<IUser> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE id = ?';

    const [rows] = await this.connection.execute(query, [id]);

    const [user] = rows as IUser[];
    
    return user;
  }

  public async create(user: IUser): Promise<Token> {
    const { username, classe, level, password } = user;

    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
      VALUES ('Max', 'Swordsman', 12, 'savingPeople')`;

    const values = [username, classe, level, password];

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, values);

    const newUser = { id: insertId, ...user };
   
    return createToken(newUser);
  }
}