import CreateUserController from '../controllers/CreateUserController';
import CreateUserService from '../services/CreateUserService';
import MySqlUserRepository from '../models/repositories/implementations/MySqlUsersRepository';

export default class CreateUserControllerFactory {
  static make() {
    const model = new MySqlUserRepository();
    const service = new CreateUserService(model);
    const controller = new CreateUserController(service);

    return controller;
  }
}