import { query } from "../../../database/mysql";
import { User } from "../../domain/Entities/User";
import { UserRepository } from "../../domain/Interface/UserRepository";

export class MysqlUserRepository implements UserRepository {
    async getAll(): Promise<User[] | null> {
        const sql = "SELECT * FROM users";
        try {
            const [data]: any = await query(sql, []);
            const dataUser = Object.values(JSON.parse(JSON.stringify(data)));
            return dataUser.map(
                (user: any) =>
                    new User(
                        user.idUser,
                        user.name,
                        user.lastName,
                        user.mail,
                        user.phone,
                        user.password,
                        user.home
                    )
            );
        } catch (error) {
            return null;
        }
    }

    async createUser(
        idUser: number,
        name: string,
        lastName: string,
        mail: string,
        phone: number,
        password: string,
        home: number
    ): Promise<User | null> {
        const sql =
            "INSERT INTO users (`idUser`, `name`, `lastName`, `mail`, `phone`, `password`, `home`) VALUES (?, ?, ?, ?, ?, ?, ?);";
        const params: any[] = [
            idUser,
            name,
            lastName,
            mail,
            phone,
            password,
            home,
        ];
        try {
            const [result]: any = await query(sql, params);
            return new User(
                idUser,
                name,
                lastName,
                mail,
                phone,
                password,
                home
            );
        } catch (error) {
            return null;
        }
    }

    async deleteUser(idUser: number): Promise<User | null> {
        const sql = "DELETE FROM users WHERE idUser = ?";
        const params: any[] = [idUser];
        try {
            const [result]: any = await query(sql, params);

            return result;
        } catch (error) {
            return null;
        }
    }
}
