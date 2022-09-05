import HttpStatus from 'http-status-codes';
import HttpException from '../exceptions/HttpExeption';

export default class UnprocessableEntity extends HttpException {
  constructor(message: string) {
    super(HttpStatus.UNPROCESSABLE_ENTITY, message);
  }
}