import { User } from "../../domain/Entities/User";
import { UserRepository } from "../../domain/Interface/UserRepository";
export class GetAllUserUserUseCase {
    constructor(readonly userRepository: UserRepository) {}
  
    async run(): Promise<User[] | null> {
      try {
        const result = await this.userRepository.getAll();
        console.log(result);
        return result;
      } catch (error) {
        return null;
      }
    }
  }
  