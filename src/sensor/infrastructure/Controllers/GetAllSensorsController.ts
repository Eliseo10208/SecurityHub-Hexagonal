import { Request, Response } from 'express';
import { GetAllSensorsUseCase } from '../../application/MethodsSensor/GetAllSensorsUseCase';

export class GetAllSensorsController {
    private getAllSensorsUseCase: GetAllSensorsUseCase;

    constructor(getAllSensorsUseCase: GetAllSensorsUseCase) {
        this.getAllSensorsUseCase = getAllSensorsUseCase;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const sensors = await this.getAllSensorsUseCase.execute();
            return res.status(200).json(sensors);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'An unexpected error occurred.' });
        }
    }
}
