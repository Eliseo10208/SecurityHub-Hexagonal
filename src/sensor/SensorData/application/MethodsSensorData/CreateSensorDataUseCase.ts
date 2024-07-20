import { SensorData } from '../../domain/Entities/SensorData';
import { SensorDataRepository } from '../../domain/Interface/SensorDataRepository';

export class CreateSensorDataUseCase {
    constructor(private sensorDataRepository: SensorDataRepository) {}

    async execute(sensorData: SensorData): Promise<SensorData> {
        return this.sensorDataRepository.createSensorData(sensorData);
    }
}
