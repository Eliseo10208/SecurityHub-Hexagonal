import { Request, Response } from 'express';
import { CreateSensorDataUseCase } from '../../application/MethodsSensorData/CreateSensorDataUseCase';
import { SensorData } from '../../domain/Entities/SensorData';

export class CreateSensorDataController {
    constructor(private createSensorDataUseCase: CreateSensorDataUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { sensorId, dataType, data } = req.body;

            const bufferData = Buffer.from(data);
            const sensorData = new SensorData(sensorId, dataType, bufferData);
            const createdSensorData = await this.createSensorDataUseCase.execute(sensorData);
            const responseData = {
                ...createdSensorData,
                data: bufferData.toString()
            };

            return res.status(201).json(responseData);
        } catch (error) {
            return res.status(500).json({ message: error instanceof Error ? error.message : 'Failed to create sensor data' });
        }
    }
}
