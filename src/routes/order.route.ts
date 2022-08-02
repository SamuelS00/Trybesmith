import { Router } from 'express';
import rescue from 'express-rescue';
import OrderController from '../controllers/order.controller';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get('/', rescue(orderController.getAll));

export default orderRouter;