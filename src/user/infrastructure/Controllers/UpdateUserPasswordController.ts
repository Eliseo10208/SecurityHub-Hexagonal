import { Request, Response } from 'express';
import { UpdateUserPasswordUseCase } from '../../application/MethodsUser/UpdateUserPasswordUseCase';

export class UpdateUserPasswordController {
    constructor(private updateUserPasswordUseCase: UpdateUserPasswordUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.params;

        try {
            await this.updateUserPasswordUseCase.execute(email);
            return res.status(200).json({ message: 'Password updated and sent successfully' });
        } catch (error: unknown) {
            return res.status(500).json({ message: error instanceof Error ? error.message : 'Failed to update and send password' });
        }
    }
}
