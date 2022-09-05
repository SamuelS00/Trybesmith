import { Router } from 'express';
import rescue from 'express-rescue';

import createProductController from '../factories/CreateProductFactory';
import getAllProductFactory from '../factories/GetAllProductFactory';

const productRouter = Router();

productRouter
  .post('/products', rescue(createProductController.handle))
  .get('/products', rescue(getAllProductFactory.handle));

export default productRouter;