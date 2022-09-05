import { Router } from 'express';
import rescue from 'express-rescue';

import loginUserController from '../factories/LoginUserFactory';

const authRouter = Router();

authRouter
  .post('/login', rescue(loginUserController.handle));

export default authRouter;