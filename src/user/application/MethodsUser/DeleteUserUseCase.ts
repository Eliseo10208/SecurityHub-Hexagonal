import { UserRepository } from '../../domain/Interface/UserRepository';

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number): Promise<void> {
    await this.userRepository.deleteUser(id);
  }
}
