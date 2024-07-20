import { Request, Response } from 'express';
import { GetUserSensorsUseCase } from '../../application/MethodsUserSensors/GetUserSensorsUseCase';

export class GetUserSensorsController {
    constructor(private getUserSensorsUseCase: GetUserSensorsUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const userId = parseInt(req.params.userId);
        if (isNaN(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        try {
            const userSensors = await this.getUserSensorsUseCase.execute(userId);
            return res.status(200).json(userSensors);
        } catch (error) {
            return res.status(500).json({ message: error instanceof Error ? error.message : 'Failed to retrieve user sensors' });
        }
    }
}