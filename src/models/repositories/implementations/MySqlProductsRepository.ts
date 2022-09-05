import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../../../interfaces/IProduct';
import Product from '../../entitites/Product';
import { IProductsRepository } from '../IProductsRepository';
import Connection from '../../Connection';

export default class MySqlProductRepository implements IProductsRepository {
  public getAll = async (): Promise<Product[]> => {
    const [rows] = await Connection.execute('SELECT * FROM Trybesmith.Products');
    return rows as Product[];
  };

  public create = async ({ name, amount }: IProduct): Promise<IProduct> => {
    const [{ insertId }] = await Connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, name, amount };
  };

  public update = async (orderId: number, productId: number): Promise<void> => {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';

    await Connection.execute(query, [orderId, productId]);
  };
}