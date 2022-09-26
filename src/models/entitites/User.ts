import Entity from './Entity';
import { IUser } from '../../interfaces/IUser';

import Name from './validators/Name';
import InvalidParam from '../../errors/InvalidParam';
import Level from './validators/Level';

export default class User extends Entity<IUser> {
  private constructor(props: IUser) {
    super(props);
  }

  static create(props: IUser) {
    const username: Name | InvalidParam = Name.create(props.username);
    const classe: Name | InvalidParam = Name.create(props.classe);
    const level: Level | InvalidParam = Level.create(props.level);

    if (username instanceof InvalidParam) return new InvalidParam('username');
    if (classe instanceof InvalidParam) return new InvalidParam('class');
    if (level instanceof InvalidParam) return new InvalidParam('level');

    return new User(props);
  }
}
