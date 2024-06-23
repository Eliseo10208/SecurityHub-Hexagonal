import { CreateUserUseCase } from "../application/MethodsUser/CreateUserUseCase";
import { GetAllUserUserUseCase } from "../application/MethodsUser/GetAllUserUseCase";
import { DeleteUserUseCase } from "../application/MethodsUser/DeleteUserUseCase";
//----------------------------
import { GetAllUserController } from "./Controllers/GetAllUserController";
import { CreateUserController } from "./Controllers/CreateUserController";
import { DeleteUserController } from "./Controllers/DeleteUserController";
import { MysqlUserRepository } from "./Repository/MysqlUserRepository";
//----------------------------


export const mysqlUserRepository = new MysqlUserRepository();
export const createUserUseCase = new CreateUserUseCase(
    mysqlUserRepository
)
export const getAllUserCase = new GetAllUserUserUseCase(mysqlUserRepository );

export const createUserController = new CreateUserController(
    createUserUseCase
  );
  
  export const getAllUserController = new GetAllUserController(
    getAllUserCase
  );
  export const deleteUserUseCase = new DeleteUserUseCase(
    mysqlUserRepository
  )
  export const deleteUserController = new DeleteUserController (
    deleteUserUseCase
  )
