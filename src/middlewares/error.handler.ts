import HttpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/http.exeption';
import ErrorMessage from '../enums/error.msg';
 
function errorMiddleware(err: HttpException, req: Request, res: Response, _next: NextFunction) {
  const status = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || ErrorMessage.INTERNAL_SERVER;
  
  res.status(status).json({ message });
}
 
export default errorMiddleware;