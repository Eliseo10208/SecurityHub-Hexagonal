import { SensorRepository } from '../../domain/Interface/SensorRepository';
import { Sensor } from '../../domain/Entities/Sensor';

export class UpdateSensorUseCase {
    private sensorRepository: SensorRepository;

    constructor(sensorRepository: SensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    async execute(id: number, sensor: Sensor): Promise<Sensor | null> {
        const updatedSensor = await this.sensorRepository.updateSensor(id, sensor);
        return updatedSensor;
    }
}