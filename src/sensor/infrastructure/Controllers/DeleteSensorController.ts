import { Request, Response } from 'express';
import { DeleteSensorUseCase } from '../../application/MethodsSensor/DeleteSensorUseCase';

export class DeleteSensorController {
    private deleteSensorUseCase: DeleteSensorUseCase;

    constructor(deleteSensorUseCase: DeleteSensorUseCase) {
        this.deleteSensorUseCase = deleteSensorUseCase;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            await this.deleteSensorUseCase.execute(Number(id));
            return res.status(204).send();
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'An unexpected error occurred.' });
        }
    }
}
