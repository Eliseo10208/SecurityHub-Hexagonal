import { MysqlSensorDataRepository } from './Repository/MysqlSensorDataRepository';
import { CreateSensorDataUseCase } from '../application/MethodsSensorData/CreateSensorDataUseCase';
import { GetSensorDataUseCase } from '../application/MethodsSensorData/GetSensorDataUseCase';
import { DeleteSensorDataUseCase } from '../application/MethodsSensorData/DeleteSensorDataUseCase';
import { CreateSensorDataController } from './Controllers/CreateSensorDataController';
import { GetSensorDataController } from './Controllers/GetSensorDataController';
import { DeleteSensorDataController } from './Controllers/DeleteSensorDataController';

export class DependenciesSensorData {
    private static sensorDataRepository = new MysqlSensorDataRepository();

    public static createSensorDataUseCase = new CreateSensorDataUseCase(this.sensorDataRepository);
    public static getSensorDataUseCase = new GetSensorDataUseCase(this.sensorDataRepository);
    public static deleteSensorDataUseCase = new DeleteSensorDataUseCase(this.sensorDataRepository);

    public static createSensorDataController = new CreateSensorDataController(this.createSensorDataUseCase);
    public static getSensorDataController = new GetSensorDataController(this.getSensorDataUseCase);
    public static deleteSensorDataController = new DeleteSensorDataController(this.deleteSensorDataUseCase);
}
