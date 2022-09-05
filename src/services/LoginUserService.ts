import { CredentialsInvalid } from '../errors';
import JwtToken from './JwtService';
import { UserCredentials } from '../interfaces/IUser';
import { IUserRepository } from '../models/repositories/IUsersRepository';
import validateCredentials from '../validations/credentialsValidations';

export default class LoginUserService {
  constructor(
    private userRepository: IUserRepository,
    private tokenService: JwtToken,
  ) { }

  execute = async (credentials: UserCredentials): Promise<string> => {
    validateCredentials(credentials);
    const [user] = await this.userRepository.getUserByUser(credentials);

    if (!user || credentials.password !== user.password) throw new CredentialsInvalid();

    const token = this.tokenService.generate({ id: user.id });
    return token;
  };
}