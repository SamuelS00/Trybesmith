import { Request, Response } from 'express';
import GetAllOrderService from '../services/GetAllOrderService';

export default class GetAllProductController {
  constructor(
    private getAllOrderServive: GetAllOrderService,
  ) { }

  handle = async (req: Request, res: Response): Promise<void> => {
    const orders = await this.getAllOrderServive.execute();
    res.status(200).json(orders);
  };
}