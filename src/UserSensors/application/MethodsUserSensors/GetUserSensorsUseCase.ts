import { UserSensorsRepository } from '../../domain/Interface/UserSensorsRepository';
import { UserSensor } from '../../domain/Entities/UserSensors'; 

export class GetUserSensorsUseCase {
    constructor(private repository: UserSensorsRepository) {}

    async execute(userId: number): Promise<UserSensor[]> {
        return await this.repository.getUserSensors(userId);
    }
}
