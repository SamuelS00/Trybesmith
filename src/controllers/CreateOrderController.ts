import { Response } from 'express';
import CreateOrderService from '../services/CreateOrderService';
import { CustomRequest } from '../middlewares/authMiddleware';

export default class CreateOrderController {
  constructor(
    private createOrderService: CreateOrderService,
  ) { }

  async handle(req: CustomRequest, res: Response): Promise<void> {
    const { productsIds } = req.body;
    const userId = req.id;

    const product = await this.createOrderService.execute(productsIds, userId);
    res.status(201).json({ product });
  }
}