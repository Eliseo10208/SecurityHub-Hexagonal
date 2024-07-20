import { SensorDataRepository } from '../../domain/Interface/SensorDataRepository';
import { SensorData } from '../../domain/Entities/SensorData';

export class GetSensorDataUseCase {
    constructor(private sensorDataRepository: SensorDataRepository) {}

    async execute(sensorId: number): Promise<SensorData[]> {
        return this.sensorDataRepository.getSensorDataBySensorId(sensorId);
    }
}
