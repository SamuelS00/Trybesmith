import { IUser } from '../interfaces/IUser';
import { IUserRepository } from '../models/repositories/IUsersRepository';
import validateUser from '../validations/userValidations';
import JwtToken from './JwtService';

export default class CreateUserService {
  constructor(
    private userRepository: IUserRepository,
    private tokenService: JwtToken,
  ) { }

  execute = async (user: IUser): Promise<string> => {
    validateUser(user);
    const newUser = await this.userRepository.createUser(user);
    const token = this.tokenService.generate({ id: newUser.id });
    return token;
  };
}