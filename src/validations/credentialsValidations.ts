import { UserCredentials } from '../interfaces/IUser';
import credentialsSchema from '../utils/credentialsSchema';
import { BadRequest, UnprocessableEntity } from '../errors/index';

const validateCredentials = (credentials: UserCredentials) => {
  const { error } = credentialsSchema.validate(credentials);

  if (error) {
    const { details: [{ type }] } = error;
    
    if (type === 'any.required') throw new BadRequest(error.message);
    if (type === 'string.base') throw new UnprocessableEntity(error.message);
  }
};

export default validateCredentials;