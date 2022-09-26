import { IProductsRepository } from '../models/repositories/IProductsRepository';

export default class GetAllProductService {
  constructor(
    private repository: IProductsRepository,
  ) { }

  execute = async () => {
    const products = await this.repository.getAll();
    return products;
  };
}