import { IProduct } from '../../interfaces/IProduct';
import Product from '../entitites/Product';

export interface IProductsRepository {
  getAll(): Promise<Product[]>;
  create({ name, amount }: IProduct): Promise<IProduct>;
  update(orderId: number, productId: number): Promise<void>
}
