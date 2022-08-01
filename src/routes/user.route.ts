import { Router } from 'express';
import rescue from 'express-rescue';
import UserController from '../controllers/user.controller';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/:id', rescue(userController.getById));
userRouter.post('/', rescue(userController.create));

export default userRouter;