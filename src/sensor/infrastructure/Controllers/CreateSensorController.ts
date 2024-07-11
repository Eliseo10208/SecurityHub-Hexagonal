import { Request, Response } from 'express';
import { CreateSensorUseCase } from '../../application/MethodsSensor/CreateSensorUseCase';
import { Sensor } from '../../domain/Entities/Sensor';

export class CreateSensorController {
    private createSensorUseCase: CreateSensorUseCase;

    constructor(createSensorUseCase: CreateSensorUseCase) {
        this.createSensorUseCase = createSensorUseCase;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { type, description } = req.body;
            const sensor = new Sensor(type, description);
            const createdSensor = await this.createSensorUseCase.execute(sensor);
            return res.status(201).json(createdSensor);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'An unexpected error occurred.' });
        }
    }
}
