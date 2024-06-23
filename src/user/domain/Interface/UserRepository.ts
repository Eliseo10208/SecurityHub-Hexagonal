import { User } from "../Entities/User";

export interface UserRepository {
    // Obtener todos los usuarios
    getAll(): Promise<User[] | null>;

    // Eliminar un usuario por ID
    deleteUser(idUser: number): Promise<User | null>;

    // Crear un nuevo usuario
    createUser(
        idUser: number,
        name: string,
        lastName: string,
        mail: string,
        phone: number,
        password: string,
        home: number
    ): Promise<User | null>;
}
