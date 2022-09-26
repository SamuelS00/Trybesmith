import { Request, Response } from 'express';
import LoginUserService from '../services/LoginUserService';

export default class LoginUserController {
  constructor(
    private loginUserService: LoginUserService,
  ) { }

  async handle(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const token = await this.loginUserService.execute({ username, password }); 
    res.status(200).json({ token });
  }
}