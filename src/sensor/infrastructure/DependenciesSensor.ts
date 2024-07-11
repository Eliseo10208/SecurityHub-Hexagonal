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

export class DependenciesSensor {
    static sensorRepository = new MysqlSensorRepository();

    static createSensorController() {
        const useCase = new CreateSensorUseCase(this.sensorRepository);
        return new CreateSensorController(useCase);
    }

    static getAllSensorsController() {
        const useCase = new GetAllSensorsUseCase(this.sensorRepository);
        return new GetAllSensorsController(useCase);
    }

    static getSensorController() {
        const useCase = new GetSensorUseCase(this.sensorRepository);
        return new GetSensorController(useCase);
    }

    static updateSensorController() {
        const useCase = new UpdateSensorUseCase(this.sensorRepository);
        return new UpdateSensorController(useCase);
    }

    static deleteSensorController() {
        const useCase = new DeleteSensorUseCase(this.sensorRepository);
        return new DeleteSensorController(useCase);
    }
}
