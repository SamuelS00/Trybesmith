import { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { Unauthorized } from '../errors/index';
import JwtToken from '../services/JwtService';

export interface CustomRequest extends Request {
  id: number
}

const validateJwt = async (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) throw new Unauthorized();

  const id = await JwtToken.decode(token);

  (req as CustomRequest).id = id;

  next();
};

export default validateJwt;