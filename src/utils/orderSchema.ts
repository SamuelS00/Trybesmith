import Joi from 'joi';

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number().min(1)).min(1).required()
    .messages({
      'number.base': '"productsIds" must include only numbers',
      'array.min': '"productsIds" must include only numbers',
      'number.min': '"productid" must be greater than 1',
    }),
});

export default orderSchema;