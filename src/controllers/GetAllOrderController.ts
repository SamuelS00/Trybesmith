import { Request, Response } from 'express';
import GetAllOrderService from '../services/GetAllOrderService';

export default class GetAllProductController {
  constructor(
    private service: GetAllOrderService,
  ) { }

  async handle(req: Request, res: Response): Promise<void> {
    const orders = await this.service.execute();
    res.status(200).json({ orders });
  }
}