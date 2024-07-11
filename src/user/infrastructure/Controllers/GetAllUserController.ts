import { Request, Response } from 'express';
import { GetAllUserUseCase } from '../../application/MethodsUser/GetAllUserUseCase';

export class GetAllUserController {
  constructor(private getAllUserUseCase: GetAllUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.getAllUserUseCase.execute();
      return res.status(200).json(users);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
}
