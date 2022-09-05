import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

export default class CreateProductController {
  constructor(
    private createUserService: CreateUserService,
  ) { }

  handle = async (req: Request, res: Response): Promise<void> => {
    const { username, classe, level, password } = req.body;
    const token = await this.createUserService.execute({ username, classe, level, password });
    res.status(201).json({ token });
  };
}