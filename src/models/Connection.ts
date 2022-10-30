import { OkPacket, RowDataPacket, ResultSetHeader, FieldPacket } from 'mysql2';
import dotenv from 'dotenv';
import mysql, { Pool } from 'mysql2/promise';

dotenv.config();

interface IConnection {
  execute<
    T extends RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader>(
    sql: string,
    values: any | any[] | { [param: string]: any }
  ): Promise<[T, FieldPacket[]]>;
}

class Connection implements IConnection {
  private static connection: Pool;

  constructor() {
    Connection.connection = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    });
  }

  public execute = async <
  T extends RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader>(
    sql: string,
    values?: any | any[] | { [param: string]: any },
  ): Promise<[T, FieldPacket[]]> => {
    const result = await Connection.connection.execute(sql, values);

    return result as [T, FieldPacket[]];
  };
}

export default new Connection();