import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../application/MethodsUser/DeleteUserUseCase";


export class DeleteUserController {
    constructor(readonly deleteUserUseCase:DeleteUserUseCase){}

    async run(req: Request, res: Response):Promise<void> {
        const id : number =parseInt(req.params. idUser)
        try {
            const user = await this.deleteUserUseCase.run(id);
            console.log(user);
            if (user)
              res.status(200).send({
                status: "success",
      
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