import { ResultSetHeader } from 'mysql2';
import { IOrdersRepository } from '../IOrdersRepository';
import Connection from '../../Connection';
import { OrderDTO } from '../../../interfaces/IOrder';

export default class MySqlOrdersRepository implements IOrdersRepository { 
  public getAll = async (): Promise<OrderDTO[]> => {
    const query = `
      SELECT 
          Orders.id,
          Orders.userId,
          JSON_ARRAYAGG(Products.id) AS productsIds 
      FROM Trybesmith.Orders AS Orders
      INNER JOIN Trybesmith.Products AS Products 
          ON Products.orderId = Orders.id
      GROUP BY Orders.id
      ORDER BY Orders.userId`;

    const [rows] = await Connection.execute(query);
    return rows as OrderDTO[];
  };

  public create = async (userId: number): Promise<number> => {
    const query = `
      INSERT INTO 
        Trybesmith.Orders (userId) 
      VALUES (?)`;
    
    const [{ insertId }] = await Connection.execute<ResultSetHeader>(query, [userId]);

    return insertId;
  };
}