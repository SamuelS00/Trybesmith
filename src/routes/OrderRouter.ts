import { Router } from 'express';
import rescue from 'express-rescue';
import authMiddleware from '../middlewares/authMiddleware';

import getAllOrderFactory from '../factories/GetAllOrderFactory';
import createOrderFactory from '../factories/CreateOrderFactory';

const orderRouter = Router();

orderRouter
  .get('/orders', rescue(getAllOrderFactory.handle))
  .post('/orders', authMiddleware, rescue(createOrderFactory.handle));

export default orderRouter;