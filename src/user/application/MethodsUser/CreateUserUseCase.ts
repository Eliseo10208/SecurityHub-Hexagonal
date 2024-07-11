import { UserRepository } from '../../domain/Interface/UserRepository';
import { User } from '../../domain/Entities/User';
import { EncryptionService } from '../../infrastructure/services/EncryptionService';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    user.password = await EncryptionService.hashPassword(user.password);
    return this.userRepository.createUser(user);
  }
}
