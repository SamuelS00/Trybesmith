import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await this.userService.getById(+id);
    res.status(HttpStatus.ACCEPTED).json(user);
  };

  public create = async (req: Request, res: Response) => {
    const user = { ...req.body };

    const token = await this.userService.create(user);
    res.status(201).json(token);
  };
}

export default UserController;