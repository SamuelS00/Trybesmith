import { ResultSetHeader } from 'mysql2';
import { IProduct, ProductDTO } from '../../../interfaces/IProduct';
import { OrderProduct } from '../../../interfaces/IOrder';
import { IProductsRepository } from '../IProductsRepository';
import Connection from '../../Connection';

export default class MySqlProductRepository implements IProductsRepository {
  public getAll = async (): Promise<ProductDTO[]> => {
    const [rows] = await Connection.execute('SELECT * FROM Trybesmith.Products');
    return rows as ProductDTO[];
  };

  public create = async ({ name, amount }: IProduct): Promise<ProductDTO> => {
    const [{ insertId }] = await Connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, name, amount };
  };

  public update = async ({ orderId, productId }: OrderProduct): Promise<void> => {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';

    await Connection.execute(query, [orderId, productId]);
  };
}