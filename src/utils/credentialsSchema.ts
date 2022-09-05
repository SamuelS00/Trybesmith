import Joi from 'joi';

const credentialsSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default credentialsSchema;