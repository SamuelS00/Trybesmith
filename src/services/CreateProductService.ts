import { IProduct } from '../interfaces/IProduct';
import { IProductsRepository } from '../models/repositories/IProductsRepository';
import validateProduct from '../validations/productValidations';

export default class CreateProductService {
  constructor(
    private productsRepository: IProductsRepository,
  ) { }

  execute = async ({ name, amount }: IProduct) => {
    validateProduct({ name, amount });
    const product = await this.productsRepository.create({ name, amount });
    return product;
  };
}