import { Sensor } from '../../domain/Entities/Sensor';
import { SensorRepository } from '../../domain/Interface/SensorRepository';

export class CreateSensorUseCase {
    private sensorRepository: SensorRepository;

    constructor(sensorRepository: SensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    async execute(sensor: Sensor): Promise<Sensor> {
        return this.sensorRepository.createSensor(sensor);
    }
}
