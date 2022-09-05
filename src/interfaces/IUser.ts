export interface UserCredentials {
  username: string,
  password: string,
}

export interface IUser extends UserCredentials {
  classe: string,
  level: number,
}

export interface UserDTO extends IUser {
  id: number;
}
