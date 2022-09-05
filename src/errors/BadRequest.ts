import HttpStatus from 'http-status-codes';
import HttpException from '../exceptions/HttpExeption';

export default class BadRequest extends HttpException {
  constructor(message: string) {
    super(HttpStatus.BAD_REQUEST, message);
  }
}