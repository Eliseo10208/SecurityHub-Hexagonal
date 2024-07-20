import UserSensorsModel from './models/UserSensorsModel';
import { UserSensorsRepository } from '../../domain/Interface/UserSensorsRepository';

export class MysqlUserSensorsRepository implements UserSensorsRepository {
    async createUserSensor(user_id: number, sensor_data_id: number, location: string): Promise<void> {
        await UserSensorsModel.create({ user_id, sensor_data_id, location });
    }

    async getUserSensors(user_id: number): Promise<any[]> {
        const records = await UserSensorsModel.findAll({ where: { user_id } });
        return records.map(record => ({
            id: record.id,
            user_id: record.user_id,
            sensor_data_id: record.sensor_data_id,
            location: record.location
        }));
    }

    async deleteUserSensor(id: number): Promise<void> {
        await UserSensorsModel.destroy({ where: { id } });
    }
}
