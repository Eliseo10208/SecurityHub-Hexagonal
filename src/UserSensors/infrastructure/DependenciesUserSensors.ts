import { MysqlUserSensorsRepository } from './Repository/MysqlUserSensorsRepository';
import { CreateUserSensorUseCase } from '../application/MethodsUserSensors/CreateUserSensorUseCase';
import { GetUserSensorsUseCase } from '../application/MethodsUserSensors/GetUserSensorsUseCase';
import { DeleteUserSensorUseCase } from '../application/MethodsUserSensors/DeleteUserSensorUseCase';
import { CreateUserSensorController } from './Controllers/CreateUserSensorController';
import { GetUserSensorsController } from './Controllers/GetUserSensorsController';
import { DeleteUserSensorController } from './Controllers/DeleteUserSensorController';

const userSensorsRepository = new MysqlUserSensorsRepository();

const createUserSensorUseCase = new CreateUserSensorUseCase(userSensorsRepository);
const getUserSensorsUseCase = new GetUserSensorsUseCase(userSensorsRepository);
const deleteUserSensorUseCase = new DeleteUserSensorUseCase(userSensorsRepository);

const createUserSensorController = new CreateUserSensorController(createUserSensorUseCase);
const getUserSensorsController = new GetUserSensorsController(getUserSensorsUseCase);
const deleteUserSensorController = new DeleteUserSensorController(deleteUserSensorUseCase);

export const DependenciesUserSensors = {
    createUserSensorController,
    getUserSensorsController,
    deleteUserSensorController
};
