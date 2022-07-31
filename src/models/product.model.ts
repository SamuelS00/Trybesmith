import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interface/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products';

    const [rows] = await this.connection.execute(query);

    return rows as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;

    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const values = [name, amount];

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, values);
   
    return { id: insertId, ...product };
  }
}