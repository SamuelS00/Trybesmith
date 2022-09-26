import InvalidParam from '../../../errors/InvalidParam';

export default class Level {
  private constructor(public level: number) { }

  static create(level: number): Level | InvalidParam {
    if (!level) return new InvalidParam('level is required');
        
    if (!this.validateLevel(level, 1)) return new InvalidParam('the minimum level is 1');

    return new Level(level);
  }

  static validateLevel = (level: number, min: number) => {
    if (level < min) return false;
  
    return true;
  };
}  