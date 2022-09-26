import HttpStatus from 'http-status-codes';
import HttpException from '../exceptions/HttpExeption';

export default class InvalidParam extends HttpException {
  constructor(message: string) {
    super(HttpStatus.BAD_REQUEST, message);
  }
}