import { Request, Response } from 'express';
import GetAllProductService from '../services/GetAllProductService';

export default class GetAllProductController {
  constructor(
    private service: GetAllProductService,
  ) { }

  async handle(req: Request, res: Response): Promise<void> {
    const products = await this.service.execute();
    res.status(200).json({ products });
  }
}