import jwt from 'jsonwebtoken';
import { JwtPayload } from '../types/JwtPayload';

export default class JwtToken {
  public generate = ({ id }: JwtPayload) => {
    const token = jwt.sign({ id }, 'secret', { expiresIn: '20m' });
    return token;
  };

  public static decode = async (token: string): Promise<number> => {
    const { id } = jwt.verify(token, 'secret') as JwtPayload;

    return id;
  };
}