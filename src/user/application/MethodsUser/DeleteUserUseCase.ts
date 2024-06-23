import { UserRepository } from "../../domain/Interface/UserRepository";
import { User } from "../../domain/Entities/User";
export class DeleteUserUseCase{
    constructor(readonly userRepository: UserRepository){}
    async run(
        idUser:number,
       
    ): Promise<User | null>{
        try {
            const user = await this.userRepository.deleteUser(
                idUser,
                
            );
            return user;
        } catch (error) {
            return null;
        }
    }
}