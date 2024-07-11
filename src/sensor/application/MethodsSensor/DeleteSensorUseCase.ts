import { SensorRepository } from '../../domain/Interface/SensorRepository';

export class DeleteSensorUseCase {
    private sensorRepository: SensorRepository;

    constructor(sensorRepository: SensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    async execute(id: number): Promise<void> {
        return this.sensorRepository.deleteSensor(id);
    }
}
