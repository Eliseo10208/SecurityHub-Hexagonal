import { Request, Response } from 'express';
import { CreateUserSensorUseCase } from '../../application/MethodsUserSensors/CreateUserSensorUseCase';

export class CreateUserSensorController {
    constructor(private createUserSensorUseCase: CreateUserSensorUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id, sensor_data_id, location } = req.body;
        try {
            await this.createUserSensorUseCase.execute(user_id, sensor_data_id, location);
            return res.status(201).send({ message: 'User-Sensor relationship created successfully' });
        } catch (error: unknown) {
            return res.status(500).json({ message: error instanceof Error ? error.message : 'Failed to create user-sensor relationship' });
        }
    }
}
