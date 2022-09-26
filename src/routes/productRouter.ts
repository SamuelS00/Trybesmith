import { Router } from 'express';
import rescue from 'express-rescue';

import { GetAllProductControllerFactory, CreateProductControllerFactory } from '../factories/index';

const getAllProductController = GetAllProductControllerFactory.make();
const createProductController = CreateProductControllerFactory.make();

const productRouter = Router();

productRouter
  .get('/products', rescue((req, res) => getAllProductController.handle(req, res)))
  .post('/products', rescue((req, res) => createProductController.handle(req, res)));
  
export default productRouter;