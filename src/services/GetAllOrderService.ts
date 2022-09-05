import { IOrdersRepository } from '../models/repositories/IOrdersRepository';

export default class GetAllOrderService {
  constructor(
    private ordersRepository: IOrdersRepository,
  ) { }

  execute = async () => {
    const orders = await this.ordersRepository.getAll();
    return orders;
  };
}