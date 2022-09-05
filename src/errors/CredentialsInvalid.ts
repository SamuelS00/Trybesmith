import HttpStatus from 'http-status-codes';
import HttpException from '../exceptions/HttpExeption';

export default class CredentialsInvalid extends HttpException {
  constructor() {
    super(HttpStatus.UNAUTHORIZED, 'Username or password invalid');
  }
}