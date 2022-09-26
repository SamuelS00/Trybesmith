import CreateOrderController from '../controllers/CreateOrderController';
import CreateOrderService from '../services/CreateOrderService';
import MySqlOrdersRepository from '../models/repositories/implementations/MySqlOrdersRepository';
import MySqlProductRepository from '../models/repositories/implementations/MySqlProductsRepository';

export default class CreateOrderControllerFactory {
  static make() {
    const productModel = new MySqlProductRepository();
    const orderModel = new MySqlOrdersRepository();
    const service = new CreateOrderService(productModel, orderModel);
    const controller = new CreateOrderController(service);

    return controller;
  }
}
