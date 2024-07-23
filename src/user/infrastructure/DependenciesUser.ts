import { MysqlUserRepository } from './Repository/MysqlUserRepository';
import { CreateUserUseCase } from '../application/MethodsUser/CreateUserUseCase';
import { DeleteUserUseCase } from '../application/MethodsUser/DeleteUserUseCase';
import { GetAllUserUseCase } from '../application/MethodsUser/GetAllUserUseCase';
import { GetUserUseCase } from '../application/MethodsUser/GetUserUseCase';
import { AuthUserCase } from '../application/MethodsUser/AuthUserCase';
import { UpdateUserPasswordUseCase } from '../application/MethodsUser/UpdateUserPasswordUseCase';

import { CreateUserController } from './Controllers/CreateUserController';
import { DeleteUserController } from './Controllers/DeleteUserController';
import { GetAllUserController } from './Controllers/GetAllUserController';
import { GetUserController } from './Controllers/GetUserController';
import { AuthUserCaseController } from './Controllers/AuthUserCaseController';
import { UpdateUserPasswordController } from './Controllers/UpdateUserPasswordController';

export class DependenciesUser {
  static userRepository = new MysqlUserRepository();

  static createUserController() {
    const createUserUseCase = new CreateUserUseCase(this.userRepository);
    return new CreateUserController(createUserUseCase);
  }

  static deleteUserController() {
    const deleteUserUseCase = new DeleteUserUseCase(this.userRepository);
    return new DeleteUserController(deleteUserUseCase);
  }

  static getAllUserController() {
    const getAllUserUseCase = new GetAllUserUseCase(this.userRepository);
    return new GetAllUserController(getAllUserUseCase);
  }

  static getUserController() {
    const getUserUseCase = new GetUserUseCase(this.userRepository);
    return new GetUserController(getUserUseCase);
  }

  static authUserCaseController() {
    const authUserCase = new AuthUserCase(this.userRepository);
    return new AuthUserCaseController(authUserCase);
  }

  static updateUserPasswordController() {
    const updateUserPasswordUseCase = new UpdateUserPasswordUseCase(this.userRepository);
    return new UpdateUserPasswordController(updateUserPasswordUseCase);
  }
}
