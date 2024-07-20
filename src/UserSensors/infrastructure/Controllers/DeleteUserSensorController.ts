import { Request, Response } from 'express';
import { DeleteUserSensorUseCase } from '../../application/MethodsUserSensors/DeleteUserSensorUseCase';

export class DeleteUserSensorController {
    constructor(private deleteUserSensorUseCase: DeleteUserSensorUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const result = await this.deleteUserSensorUseCase.execute(Number(id));
            if (result) {
                return res.status(204).send();
            } else {
                return res.status(404).json({ message: 'User-Sensor relationship not found' });
            }
        } catch (error: unknown) {
            return res.status(500).json({ message: error instanceof Error ? error.message : 'Failed to delete user-sensor relationship' });
        }
    }
}
