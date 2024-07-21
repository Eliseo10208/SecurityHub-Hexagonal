import { Request, Response } from 'express';
import { DeleteSensorDataUseCase } from '../../application/MethodsSensorData/DeleteSensorDataUseCase';

export class DeleteSensorDataController {
    constructor(private deleteSensorDataUseCase: DeleteSensorDataUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const dataId = parseInt(req.params.dataId);
            if (isNaN(dataId)) {
                return res.status(400).json({ message: "Invalid data ID" });
            }
            const wasDeleted = await this.deleteSensorDataUseCase.execute(dataId);
            if (wasDeleted) {
                return res.status(204).send();  // No Content
            } else {
                return res.status(404).json({ message: "Data not found" });  // Not Found
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            } else {
                return res.status(500).json({ message: 'An unexpected error occurred.' });
            }
        }
    }
}
