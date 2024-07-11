import { Sensor } from '../../domain/Entities/Sensor';
import { SensorRepository } from '../../domain/Interface/SensorRepository';

export class UpdateSensorUseCase {
    private sensorRepository: SensorRepository;

    constructor(sensorRepository: SensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    async execute(id: number, sensor: Sensor): Promise<Sensor | null> {
        return this.sensorRepository.updateSensor(id, sensor);
    }
}
