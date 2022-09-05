import LoginUserController from '../controllers/LoginUserController';
import LoginUserService from '../services/LoginUserService';
import JwtToken from '../services/JwtService';
import MySqlUserRepository from '../models/repositories/implementations/MySqlUsersRepository';

const makeLoginUserController = () => {
  const model = new MySqlUserRepository();
  const jwtToken = new JwtToken();
  const service = new LoginUserService(model, jwtToken);
  const controller = new LoginUserController(service);

  return controller;
};

export default makeLoginUserController();