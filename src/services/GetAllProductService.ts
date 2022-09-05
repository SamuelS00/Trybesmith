import { IProductsRepository } from '../models/repositories/IProductsRepository';

export default class GetAllProductService {
  constructor(
    private productsRepository: IProductsRepository,
  ) { }

  execute = async () => {
    const products = await this.productsRepository.getAll();
    return products;
  };
}