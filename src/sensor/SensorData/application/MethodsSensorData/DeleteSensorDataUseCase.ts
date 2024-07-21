import { SensorDataRepository } from '../../domain/Interface/SensorDataRepository';

export class DeleteSensorDataUseCase {
    constructor(private sensorDataRepository: SensorDataRepository) {}

async execute(sensorDataId: number): Promise<boolean> {
    return this.sensorDataRepository.deleteSensorData(sensorDataId);
}

}
