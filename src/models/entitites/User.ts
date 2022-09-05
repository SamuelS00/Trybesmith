import Entity from './Entity';
import { IUser } from '../../interfaces/IUser';

export default class User extends Entity<IUser> {
  private constructor(props: IUser) {
    super(props);
  }

  static create = (props: IUser) => {
    const user = new User(props);

    return user;
  };
}
