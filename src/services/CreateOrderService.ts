import { IOrder } from '../interfaces/IOrder';
import { IOrdersRepository } from '../models/repositories/IOrdersRepository';
import { IProductsRepository } from '../models/repositories/IProductsRepository';
import validateOrder from '../validations/orderValidations';

export default class CreateOrderService {
  constructor(
    private productsRepository: IProductsRepository,
    private ordersRepository: IOrdersRepository,
  ) { }

  execute = async (productsIds: number[], userId: number): Promise<IOrder> => {
    validateOrder(productsIds);

    const orderId = await this.ordersRepository.create(userId);

    await productsIds.forEach(async (productId: number) => {
      await this.productsRepository.update(orderId, productId);
    });
    
    return { userId, productsIds };
  };
}