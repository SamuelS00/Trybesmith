import { Router } from 'express';
import rescue from 'express-rescue';
import ProductController from '../controllers/product.controller';

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/', rescue(productController.getAll));
productRouter.post('/', rescue(productController.create));

export default productRouter;