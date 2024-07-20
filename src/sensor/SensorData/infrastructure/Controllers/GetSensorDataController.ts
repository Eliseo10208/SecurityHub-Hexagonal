import { Request, Response } from 'express';
import { GetSensorDataUseCase } from '../../application/MethodsSensorData/GetSensorDataUseCase';
import { SensorData } from '../../domain/Entities/SensorData';

export class GetSensorDataController {
    constructor(private getSensorDataUseCase: GetSensorDataUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const sensorId = parseInt(req.params.sensorId);
            if (isNaN(sensorId)) {
                return res.status(400).json({ message: "Invalid sensor ID" });
            }
            const sensorDataArray = await this.getSensorDataUseCase.execute(sensorId);
            const responseData = sensorDataArray.map(sensorData => ({
                ...sensorData,
                data: sensorData.data.toString()
            }));

            return res.status(200).json(responseData);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            } else {
                return res.status(500).json({ message: 'An unexpected error occurred.' });
            }
        }
    }
}
