import { Request, Response } from 'express';
import GetAllProductService from '../services/GetAllProductService';

export default class GetAllProductController {
  constructor(
    private getAllProductService: GetAllProductService,
  ) { }

  handle = async (req: Request, res: Response): Promise<void> => {
    const products = await this.getAllProductService.execute();
    res.status(200).json(products);
  };
}