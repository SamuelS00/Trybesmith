import Entity from './Entity';
import { IProduct } from '../../interfaces/IProduct';

export default class Product extends Entity<IProduct> {
  private constructor(props: IProduct) {
    super(props);
  }

  static create = (props: IProduct) => {
    const product = new Product(props);

    return product;
  };
}
