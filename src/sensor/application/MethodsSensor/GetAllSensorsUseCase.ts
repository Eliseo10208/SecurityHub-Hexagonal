import { Sensor } from '../../domain/Entities/Sensor';
import { SensorRepository } from '../../domain/Interface/SensorRepository';

export class GetAllSensorsUseCase {
    private sensorRepository: SensorRepository;

    constructor(sensorRepository: SensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    async execute(): Promise<Sensor[]> {
        return this.sensorRepository.getAllSensors();
    }
}
