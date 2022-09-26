import GetAllOrderController from '../controllers/GetAllOrderController';
import GetAllOrderService from '../services/GetAllOrderService';
import MySqlOrderRepository from '../models/repositories/implementations/MySqlOrdersRepository';

export default class GetAllOrderControllerFactory {
  static make() {
    const model = new MySqlOrderRepository();
    const service = new GetAllOrderService(model);
    const controller = new GetAllOrderController(service);

    return controller;
  }
}