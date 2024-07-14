import { MysqlSensorRepository } from './Repository/MysqlSensorRepository';
import { CreateSensorUseCase } from '../application/MethodsSensor/CreateSensorUseCase';
import { GetAllSensorsUseCase } from '../application/MethodsSensor/GetAllSensorsUseCase';
import { GetSensorUseCase } from '../application/MethodsSensor/GetSensorUseCase';
import { UpdateSensorUseCase } from '../application/MethodsSensor/UpdateSensorUseCase';
import { DeleteSensorUseCase } from '../application/MethodsSensor/DeleteSensorUseCase';
import { CreateSensorController } from './Controllers/CreateSensorController';
import { GetAllSensorsController } from './Controllers/GetAllSensorsController';
import { GetSensorController } from './Controllers/GetSensorController';
import { UpdateSensorController } from './Controllers/UpdateSensorController';
import { DeleteSensorController } from './Controllers/DeleteSensorController';
import UploadFileController from './Controllers/UploadFileController';

// Clase para gestionar las dependencias relacionadas con los sensores
export class DependenciesSensor {
    static sensorRepository = new MysqlSensorRepository();

    // Método para crear un controlador de sensor
    static createSensorController() {
        const useCase = new CreateSensorUseCase(this.sensorRepository);
        return new CreateSensorController(useCase);
    }

    // Método para obtener el controlador de carga de archivos
    static uploadFileController() {
        return UploadFileController;
    }

    // Método para obtener el controlador de todos los sensores
    static getAllSensorsController() {
        const useCase = new GetAllSensorsUseCase(this.sensorRepository);
        return new GetAllSensorsController(useCase);
    }

    // Método para obtener un controlador de sensor específico
    static getSensorController() {
        const useCase = new GetSensorUseCase(this.sensorRepository);
        return new GetSensorController(useCase);
    }

    // Método para actualizar un controlador de sensor
    static updateSensorController() {
        const useCase = new UpdateSensorUseCase(this.sensorRepository);
        return new UpdateSensorController(useCase);
    }

    // Método para eliminar un controlador de sensor
    static deleteSensorController() {
        const useCase = new DeleteSensorUseCase(this.sensorRepository);
        return new DeleteSensorController(useCase);
    }
}