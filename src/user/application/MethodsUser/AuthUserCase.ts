import { UserRepository } from '../../domain/Interface/UserRepository';
import { EncryptionService } from '../../infrastructure/services/EncryptionService';
import { AuthService } from '../../infrastructure/services/AuthService';

export class AuthUserCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.authenticateUser(email, password);
    if (user && await EncryptionService.comparePasswords(password, user.password)) {
      return AuthService.generateToken(user);
    }
    return null;
  }
}
