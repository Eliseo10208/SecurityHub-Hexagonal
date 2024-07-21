import { UserSensorsRepository } from '../../domain/Interface/UserSensorsRepository';

export class DeleteUserSensorUseCase {
    constructor(private userSensorsRepository: UserSensorsRepository) {}

    async execute(id: number): Promise<boolean> {
        await this.userSensorsRepository.deleteUserSensor(id);
        return true;
    }
}
