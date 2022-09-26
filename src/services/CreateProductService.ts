import InvalidParam from '../errors/InvalidParam';
import { IProduct } from '../interfaces/IProduct';
import Product from '../models/entitites/Product';
import { IProductsRepository } from '../models/repositories/IProductsRepository';

export default class CreateProductService {
  constructor(
    private repository: IProductsRepository,
  ) { }

  async execute({ name, amount }: IProduct) {
    const productOrError = Product.create({ name, amount });
    if (productOrError instanceof InvalidParam) throw productOrError;
  
    const newProduct = await this.repository.create(productOrError.props);
    return newProduct;
  }
}