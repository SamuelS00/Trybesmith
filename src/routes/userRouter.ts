import { Router } from 'express';
import rescue from 'express-rescue';

import { CreateUserControllerFactory } from '../factories/index';

const createUserController = CreateUserControllerFactory.make();

const userRouter = Router();

userRouter
  .post('/users', rescue((req, res) => createUserController.handle(req, res)));

export default userRouter;