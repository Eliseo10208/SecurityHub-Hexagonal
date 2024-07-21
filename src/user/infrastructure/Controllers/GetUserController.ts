import { Request, Response } from 'express';
import { GetUserUseCase } from '../../application/MethodsUser/GetUserUseCase';

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.getUserUseCase.execute(Number(req.params.id));
      if (user) {
        return res.status(200).json(user);
      }
      return res.status(404).json({ message: 'User not found' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
}
