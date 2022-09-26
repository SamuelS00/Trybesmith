import { IProduct, ProductDTO } from '../../interfaces/IProduct';
import { OrderProduct } from '../../interfaces/IOrder';

export interface IProductsRepository {
  getAll(): Promise<IProduct[]>;
  create({ name, amount }: IProduct): Promise<ProductDTO>;
  update({ orderId, productId }: OrderProduct): Promise<void>
}
