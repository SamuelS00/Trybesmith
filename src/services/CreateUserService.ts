import { IUser } from '../interfaces/IUser';
import { IUserRepository } from '../models/repositories/IUsersRepository';

import InvalidParam from '../errors/InvalidParam';
import User from '../models/entitites/User';
import JwtToken from '../helpers/JwtService';

export default class CreateUserService {
  constructor(
    private repository: IUserRepository,
  ) { }

  async execute({ username, classe, level, password }: IUser): Promise<string> {
    const userOrError = User.create({ username, classe, level, password });
    if (userOrError instanceof InvalidParam) throw userOrError;

    const newUser = await this.repository.create(userOrError.props);

    const token = JwtToken.generate({ id: newUser.id });
    return token;
  }
}