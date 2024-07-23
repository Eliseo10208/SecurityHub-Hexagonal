import { UserRepository } from '../../domain/Interface/UserRepository';
import { User } from '../../domain/Entities/User';
import { EncryptionService } from '../../infrastructure/services/EncryptionService';

export class UpdateUserProfileUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(id: number, updatedData: Partial<User>): Promise<void> {
        if (updatedData.password) {
            updatedData.password = await EncryptionService.hashPassword(updatedData.password);
        }
        await this.userRepository.updateUserProfile(id, updatedData);
    }
}
