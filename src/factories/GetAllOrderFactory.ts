import GetAllOrderController from '../controllers/GetAllOrderController';
import GetAllOrderService from '../services/GetAllOrderService';
import MySqlOrderRepository from '../models/repositories/implementations/MySqlOrdersRepository';

const makeGetAllOrderController = () => {
  const model = new MySqlOrderRepository();
  const service = new GetAllOrderService(model);
  const controller = new GetAllOrderController(service);

  return controller;
};

export default makeGetAllOrderController();