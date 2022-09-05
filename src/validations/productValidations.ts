import { IProduct } from '../interfaces/IProduct';
import productSchema from '../utils/productSchema';
import { BadRequest, UnprocessableEntity } from '../errors/index';

const validateProduct = (product: IProduct) => {
  const { error } = productSchema.validate(product);

  if (error) {
    const { details: [{ type }] } = error;
    
    if (type === 'any.required') throw new BadRequest(error.message);
    if (type === 'string.min' || type === 'string.base') {
      throw new UnprocessableEntity(error.message);
    }
  }
};

export default validateProduct;