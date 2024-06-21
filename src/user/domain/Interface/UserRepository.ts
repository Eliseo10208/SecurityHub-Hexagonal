import { User } from "../Entities/User";

export interface UserRepository {
    //ObTENER TODOS LOS USUARIOS
    getAll(): Promise<User[] | null>;
    //ELIMINAR UN USUARIO 
    deleteUser(id: number): Promise<User | null>;
}
