import CreateProductController from '../controllers/CreateProductController';
import CreateProductService from '../services/CreateProductService';
import MySqlProductRepository from '../models/repositories/implementations/MySqlProductsRepository';

export default class CreateProductControllerFactory {
  static make() {
    const model = new MySqlProductRepository();
    const service = new CreateProductService(model);
    const controller = new CreateProductController(service);

    return controller;
  }
}

// export default makeCreateProductController();