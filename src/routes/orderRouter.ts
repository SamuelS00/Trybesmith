import { Router } from 'express';
import rescue from 'express-rescue';
import authMiddleware from '../middlewares/authMiddleware';

import { GetAllOrderControllerFactory, CreateOrderControllerFactory } from '../factories/index';

const getAllOrderFactory = GetAllOrderControllerFactory.make();
const createOrderFactory = CreateOrderControllerFactory.make();

const orderRouter = Router();

orderRouter
  .get('/orders', rescue((req, res) => getAllOrderFactory.handle(req, res)))
  .post('/orders', authMiddleware, rescue((req, res) => createOrderFactory.handle(req, res)));

export default orderRouter;