import { IOrdersRepository } from '../models/repositories/IOrdersRepository';

export default class GetAllOrderService {
  constructor(
    private repository: IOrdersRepository,
  ) { }

  execute = async () => {
    const orders = await this.repository.getAll();
    return orders;
  };
}