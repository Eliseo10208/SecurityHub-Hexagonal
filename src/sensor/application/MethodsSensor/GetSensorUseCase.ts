import { Sensor } from '../../domain/Entities/Sensor';
import { SensorRepository } from '../../domain/Interface/SensorRepository';

export class GetSensorUseCase {
    private sensorRepository: SensorRepository;

    constructor(sensorRepository: SensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    async execute(id: number): Promise<Sensor | null> {
        return this.sensorRepository.getSensorById(id);
    }
}
