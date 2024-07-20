import { UserSensor } from '../Entities/UserSensors';

export interface UserSensorsRepository {
    createUserSensor(user_id: number, sensor_data_id: number, location: string): Promise<void>;
    getUserSensors(user_id: number): Promise<UserSensor[]>;
    deleteUserSensor(id: number): Promise<void>;
}
