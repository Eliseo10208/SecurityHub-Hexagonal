import { UserRepository } from '../../domain/Interface/UserRepository';
import { User } from '../../domain/Entities/User';

export class GetAllUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}
