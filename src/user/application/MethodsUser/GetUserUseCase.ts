import { UserRepository } from '../../domain/Interface/UserRepository';
import { User } from '../../domain/Entities/User';

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number): Promise<User | null> {
    return this.userRepository.getUserById(id);
  }
}
