import { Request, Response } from 'express';
import { GetSensorUseCase } from '../../application/MethodsSensor/GetSensorUseCase';

export class GetSensorController {
    private getSensorUseCase: GetSensorUseCase;

    constructor(getSensorUseCase: GetSensorUseCase) {
        this.getSensorUseCase = getSensorUseCase;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const sensorId = Number(id);
            if (isNaN(sensorId)) {
                return res.status(400).json({ message: "Invalid ID format" });
            }
            const sensor = await this.getSensorUseCase.execute(sensorId);
            if (sensor) {
                return res.status(200).json(sensor);
            }
            return res.status(404).json({ message: 'Sensor not found' });
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'An unexpected error occurred.' });
        }
    }
}
