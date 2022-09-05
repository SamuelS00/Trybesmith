import { OrderDTO } from '../../interfaces/IOrder';

export interface IOrdersRepository {
  getAll(): Promise<OrderDTO[]> 
  create(userId: number): Promise<number>
}