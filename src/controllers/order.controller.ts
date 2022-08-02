import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(HttpStatus.OK).json(orders);
  };
}

export default OrderController;