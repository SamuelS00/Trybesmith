import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  classe: Joi.string().min(3).required(),
  password: Joi.string().min(3).required(),
});

export default userSchema;