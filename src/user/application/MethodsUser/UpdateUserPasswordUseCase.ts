import { UserRepository } from '../../domain/Interface/UserRepository';

export class UpdateUserPasswordUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(id: number, newPassword: string): Promise<void> {
        await this.userRepository.updateUserPassword(id, newPassword);
    }
}
