import { BadRequest, UnprocessableEntity } from '../errors/index';
import orderSchema from '../utils/orderSchema';

const validateOrder = (productsIds: number[]) => {
  const { error } = orderSchema.validate({ productsIds });

  if (error) {
    const { details: [{ type }] } = error;

    console.log(type);
    
    if (type === 'any.required') throw new BadRequest(error.message);
    
    throw new UnprocessableEntity(error.message);
  }
};

export default validateOrder;
