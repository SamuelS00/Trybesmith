import InvalidParam from '../../../errors/InvalidParam';

export default class Name {
  private constructor(public name: string) { }

  static create(name: string): Name | InvalidParam {
    if (!name) return new InvalidParam('name is required');

    if (!this.validateStringLength(name, 3)) {
      return new InvalidParam('"username" length must be at least 3 characters long');
    }

    return new Name(name);
  }

  static validateStringLength = (str: string, length: number) => {
    if (str.length < length) return false;
  
    return true;
  };
}  