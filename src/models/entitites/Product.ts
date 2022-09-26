import Entity from './Entity';
import { IProduct } from '../../interfaces/IProduct';

import Name from './validators/Name';
import InvalidParam from '../../errors/InvalidParam';

export default class Product extends Entity<IProduct> {
  private constructor(props: IProduct) {
    super(props);
  }

  static create(props: IProduct) {
    const amount: Name | InvalidParam = Name.create(props.amount);
    const name: Name | InvalidParam = Name.create(props.name);

    if (amount instanceof InvalidParam) return new InvalidParam('amount');
    if (name instanceof InvalidParam) return new InvalidParam('name');

    return new Product(props);
  }
}
