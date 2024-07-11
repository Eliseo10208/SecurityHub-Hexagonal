import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/MethodsUser/CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.createUserUseCase.execute(req.body);
      return res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
}
