import { Router } from 'express';
import rescue from 'express-rescue';

import createUserController from '../factories/CreateUserFactory';

const userRouter = Router();

userRouter
  .post('/users', rescue(createUserController.handle));

export default userRouter;