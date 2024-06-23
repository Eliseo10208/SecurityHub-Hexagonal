import { Request, Response } from "express";

import { GetAllUserUserUseCase } from "../../application/MethodsUser/GetAllUserUseCase";

export class GetAllUserController {
    constructor(readonly getAllUserUseCase: GetAllUserUserUseCase) {}
    async run(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.getAllUserUseCase.run();
            console.log(user);
            if (user)
                res.status(200).send({
                    status: "success",
                    data: user.map((user: any) => {
                        return {
                            idUser: user?.idUser,
                            name: user?.name,
                            lastName: user?.lastName,
                            mail: user?.mail,
                            phone: user?.phone,
                            password: user?.password,
                            home: user?.home,
                        };
                    }),
                });
            else
                res.status(400).send({
                    status: "error",
                    msn: "Hubo un problema",
                });
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Hubo un problema",
                msn: error,
            });
        }
    }
}
