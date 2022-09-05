import CreateUserController from '../controllers/CreateUserController';
import CreateUserService from '../services/CreateUserService';
import JwtToken from '../services/JwtService';
import MySqlUserRepository from '../models/repositories/implementations/MySqlUsersRepository';

const makeCreateUserController = () => {
  const model = new MySqlUserRepository();
  const jwtToken = new JwtToken();
  const service = new CreateUserService(model, jwtToken);
  const controller = new CreateUserController(service);

  return controller;
};

export default makeCreateUserController();