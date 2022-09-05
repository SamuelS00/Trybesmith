import { Response } from 'express';
import CreateOrderService from '../services/CreateOrderService';
import { CustomRequest } from '../middlewares/authMiddleware';

export default class CreateOrderController {
  constructor(
    private createOrderService: CreateOrderService,
  ) { }

  handle = async (req: CustomRequest, res: Response): Promise<void> => {
    const { productsIds } = req.body;
    const userId = req.id;

    console.log(userId);

    const product = await this.createOrderService.execute(productsIds, userId);
    res.status(201).json(product);
  };
}