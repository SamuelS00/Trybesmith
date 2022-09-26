import LoginUserController from '../controllers/LoginUserController';
import LoginUserService from '../services/LoginUserService';
import MySqlUserRepository from '../models/repositories/implementations/MySqlUsersRepository';

export default class LoginUserControllerFactory {
  static make() {
    const model = new MySqlUserRepository();
    const service = new LoginUserService(model);
    const controller = new LoginUserController(service);

    return controller;
  }
}