import { UserSensorsRepository } from '../../domain/Interface/UserSensorsRepository';

export class CreateUserSensorUseCase {
    constructor(private userSensorsRepository: UserSensorsRepository) {}

    async execute(user_id: number, sensor_data_id: number, location: string): Promise<void> {
        await this.userSensorsRepository.createUserSensor(user_id, sensor_data_id, location);
    }
}
