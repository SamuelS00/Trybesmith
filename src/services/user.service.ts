import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser from '../interface/user.interface';

class UserService {
  public model: UserModel;
 
  constructor() {
    this.model = new UserModel(connection);
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.model.getById(id);
    return user;
  }

  public async create(user: IUser): Promise<object> {
    const token = await this.model.create(user);
    return token;
  }
}

export default UserService;