import { SensorDataRepository } from '../../domain/Interface/SensorDataRepository';
import { SensorData } from '../../domain/Entities/SensorData';
import SensorDataModel from './models/SensorDataModel';

export class MysqlSensorDataRepository implements SensorDataRepository {
    async createSensorData(sensorData: SensorData): Promise<SensorData> {
        const created = await SensorDataModel.create({
            sensor_id: sensorData.sensor_id,
            data_type: sensorData.data_type,
            data: sensorData.data
        });
        return new SensorData(
            created.sensor_id,
            created.data_type,
            created.data as Buffer,
            created.id
        );
    }

    async getSensorDataBySensorId(sensorId: number): Promise<SensorData[]> {
        const data = await SensorDataModel.findAll({
            where: { sensor_id: sensorId }
        });
        return data.map(item => new SensorData(
            item.sensor_id,
            item.data_type,
            item.data as Buffer,
            item.id
        ));
    }

    async deleteSensorData(sensorDataId: number): Promise<boolean> {
        const result = await SensorDataModel.destroy({
            where: { id: sensorDataId }
        });
        return result > 0;
    }
}
