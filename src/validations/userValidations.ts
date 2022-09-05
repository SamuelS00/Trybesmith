import { IUser } from '../interfaces/IUser';

import userSchema from '../utils/userSchema';
import { BadRequest, UnprocessableEntity } from '../errors/index';

const validateUser = (user: IUser) => {
  const { error } = userSchema.validate(user);

  if (error) {
    const { details: [{ type }] } = error;
    
    if (type === 'any.required') throw new BadRequest(error.message);

    if (
      type === 'string.min' 
      || type === 'string.base' 
      || type === 'number.base' 
      || type === 'number.min'
    ) {
      throw new UnprocessableEntity(error.message);
    }
  }
};

export default validateUser;