// import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import connection from '../models/connection';
// import HttpException from '../exceptions/http.exeption';
// import UserModel from '../models/user.model';

import Token from '../types/token';

dotenv.config();

export default async function createToken(user: object): Promise<Token> {
  const token = jwt.sign({ data: user }, 'secret', { expiresIn: '20m' });
  return { token };
}

// export default async function jwtService(req: Request, res: Response, next: NextFunction) {
//   const { authorization } = req.headers;
//   if (!authorization) throw new HttpException(401, 'Unauthorized User');
//   const { id } = jwt.verify(token, process.env.JWT_SECRET ) as JwtPayload;
//   const userModel = new UserModel(connection);
//   const user = await userModel.getById(id);
//   if (!user) throw new HttpException(401, 'Unauthorized User');
//   req.user = user;
//   next();
// }