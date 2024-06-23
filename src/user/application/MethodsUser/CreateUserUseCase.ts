import { json } from "stream/consumers";
import { User } from "../../domain/Entities/User";
import { UserRepository } from "../../domain/Interface/UserRepository";

export class CreateUserUseCase {
    constructor(readonly userRepository: UserRepository) {}
    async run(
        idUser: number,
        name: string,
        lastName: string,
        mail: string,
        phone: number,
        password: string,
        home: number
    ): Promise<User | null> {
        try {
            const user = await this.userRepository.createUser(
                idUser,
                name,
                lastName,
                mail,
                phone,
                password,
                home
            );
            console.log(user)
            return user;
        } catch (error) {
            return null;
        }
    }
}
