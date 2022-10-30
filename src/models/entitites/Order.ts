import Entity from './Entity';
import { IOrder } from '../../interfaces/IOrder';
import InvalidParam from '../../errors/InvalidParam';
import ProductsIds from './validators/ProductsIds';

export default class Order extends Entity<IOrder> {
  private constructor(props: IOrder) {
    super(props);
  }

  static create(props: IOrder) {
    const productsIds: ProductsIds | InvalidParam = ProductsIds.create(props.productsIds);

    if (productsIds instanceof InvalidParam) return new InvalidParam('productsIds');
    
    return new Order(props);
  }
}
