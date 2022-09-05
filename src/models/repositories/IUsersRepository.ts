import { IUser, UserCredentials, UserDTO } from '../../interfaces/IUser';

export interface IUserRepository {
  getUserById(id: number): Promise<UserDTO[]>;
  getUserByUser({ username, password }: UserCredentials): Promise<UserDTO[]>
  createUser({ username, classe, level, password }: IUser): Promise<UserDTO>;
}
