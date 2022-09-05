import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';

export default class CreateProductController {
  constructor(
    private createProductService: CreateProductService,
  ) { }

  handle = async (req: Request, res: Response): Promise<void> => {
    const { name, amount } = req.body;
    const product = await this.createProductService.execute({ name, amount });
    res.status(201).json(product);
  };
}