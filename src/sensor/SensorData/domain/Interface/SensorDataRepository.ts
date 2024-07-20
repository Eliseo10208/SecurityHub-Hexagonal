import { SensorData } from '../Entities/SensorData';

export interface SensorDataRepository {
    createSensorData(sensorData: SensorData): Promise<SensorData>;
    getSensorDataBySensorId(sensorId: number): Promise<SensorData[]>;
    deleteSensorData(sensorDataId: number): Promise<boolean>;
}
