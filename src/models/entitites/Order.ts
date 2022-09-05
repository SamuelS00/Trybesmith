import Entity from './Entity';
import { IOrder } from '../../interfaces/IOrder';

export default class Order extends Entity<IOrder> {
  private constructor(props: IOrder) {
    super(props);
  }

  static create = (props: IOrder) => {
    const order = new Order(props);

    return order;
  };
}
