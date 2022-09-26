import { Router } from 'express';
import rescue from 'express-rescue';

import { LoginUserControllerFactory } from '../factories/index';

const loginUserController = LoginUserControllerFactory.make();

const authRouter = Router();

authRouter
  .post('/login', rescue((req, res) => loginUserController.handle(req, res)));

export default authRouter;