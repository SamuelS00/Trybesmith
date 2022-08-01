import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interface/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';

    const [rows] = await this.connection.execute(query);

    return rows as IProduct[];
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;

    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const values = [name, amount];

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, values);
   
    return { id: insertId, ...product };
  }
}