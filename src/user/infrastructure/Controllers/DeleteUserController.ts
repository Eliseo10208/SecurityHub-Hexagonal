import { Request, Response } from 'express';
import { DeleteUserUseCase } from '../../application/MethodsUser/DeleteUserUseCase';

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.deleteUserUseCase.execute(Number(req.params.id));
      return res.status(204).send();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
}
