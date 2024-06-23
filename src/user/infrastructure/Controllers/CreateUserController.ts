import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/MethodsUser/CreateUserUseCase";

export class CreateUserController {
    constructor(readonly createUserUseCase: CreateUserUseCase) {}

    async run(req: Request, res: Response): Promise<void> {
        const { idUser, name, lastName, mail, phone, password, home } = req.body;
        
        if (!idUser || !name || !lastName || !mail || !phone || !password || !home) {
            res.status(400).send({
                status: "error",
                data: "Faltan datos requeridos",
            });
            return;
        }

        try {
            const user = await this.createUserUseCase.run(
                idUser,
                name,
                lastName,
                mail,
                phone,
                password,
                home
            );

            if (user) {
                res.status(201).send({
                    status: "success",
                    data: {
                        idUser: user.idUser,
                        name: user.name,
                        lastName: user.lastName,
                        mail: user.mail,
                        phone: user.phone,
                        password: user.password,
                        home: user.home,
                    },
                });
            } else {
                res.status(400).send({
                    status: "error",
                    data: "No fue posible agregar el registro",
                });
            }
        } catch (error) {
            res.status(500).send({
                status: "error",
                data: "Ocurrió un error",
                messages: error,
            });
        }
    }
}
