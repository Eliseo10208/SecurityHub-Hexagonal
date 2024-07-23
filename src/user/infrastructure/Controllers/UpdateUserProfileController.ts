import { Request, Response } from 'express';
import { UpdateUserProfileUseCase } from '../../application/MethodsUser/UpdateUserProfileUseCase';

export class UpdateUserProfileController {
    constructor(private updateUserProfileUseCase: UpdateUserProfileUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const updatedData = req.body;

        try {
            await this.updateUserProfileUseCase.execute(Number(id), updatedData);
            return res.status(200).json({ message: 'Profile updated successfully' });
        } catch (error: unknown) {
            return res.status(500).json({ message: error instanceof Error ? error.message : 'Failed to update profile' });
        }
    }
}
