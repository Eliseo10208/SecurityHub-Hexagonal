import { Request, Response } from 'express';
import { UpdateSensorUseCase } from '../../application/MethodsSensor/UpdateSensorUseCase';
import { Sensor } from '../../domain/Entities/Sensor';

export class UpdateSensorController {
    private updateSensorUseCase: UpdateSensorUseCase;

    constructor(updateSensorUseCase: UpdateSensorUseCase) {
        this.updateSensorUseCase = updateSensorUseCase;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { type, description } = req.body;
        try {
            const sensorId = Number(id);
            if (isNaN(sensorId)) {
                return res.status(400).json({ message: "Invalid ID format" });
            }

            const sensor = new Sensor(type, description, sensorId);
            const updatedSensor = await this.updateSensorUseCase.execute(sensorId, sensor);
            if (updatedSensor) {
                return res.status(200).json(updatedSensor);
            } else {
                return res.status(404).json({ message: 'Sensor not found' });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'An unexpected error occurred.' });
        }
    }
}
