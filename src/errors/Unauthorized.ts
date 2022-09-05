import HttpException from '../exceptions/HttpExeption';

export default class Unauthorized extends HttpException {
  constructor() {
    super(401, 'Token Not Found');
  }
}