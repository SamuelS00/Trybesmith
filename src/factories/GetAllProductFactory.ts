import GetAllProductController from '../controllers/GetAllProductController';
import GetAllProductService from '../services/GetAllProductService';
import MySqlProductRepository from '../models/repositories/implementations/MySqlProductsRepository';

const makeGetAllProductController = () => {
  const model = new MySqlProductRepository();
  const service = new GetAllProductService(model);
  const controller = new GetAllProductController(service);

  return controller;
};

export default makeGetAllProductController();