import { Pool } from 'mysql2/promise';
import IOrder from '../interface/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
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

    const [rows] = await this.connection.execute(query);
  
    const orders = rows as IOrder[];

    return orders;
  }
}