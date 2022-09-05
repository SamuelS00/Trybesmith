import HttpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpExeption';
 
function errorMiddleware(err: HttpException, req: Request, res: Response, _next: NextFunction) {
  const status = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Internal error';
  
  res.status(status).json({ message });
}
 
export default errorMiddleware;