import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }
  
  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(HttpStatus.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = { ...req.body };

    const newProduct = await this.productService.create(product);
    res.status(HttpStatus.CREATED).json(newProduct);
  };
}

export default ProductController;