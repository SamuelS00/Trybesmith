import InvalidParam from '../../../errors/InvalidParam';

export default class ProductsIds {
  private constructor(public productsIds: number[]) { }

  static create(productsIds: number[]): ProductsIds | InvalidParam {
    if (!productsIds) return new InvalidParam('productsIds is required');

    console.log(this.numbersGreaterThanOne(productsIds));

    if (!this.numbersGreaterThanOne(productsIds)) {
      return new InvalidParam('"productid" must be greater than 1');
    }
    
    return new ProductsIds(productsIds);
  }

  static numbersGreaterThanOne(productsIds: number[]) {
    return productsIds.every((n) => n > 1);
  }
}