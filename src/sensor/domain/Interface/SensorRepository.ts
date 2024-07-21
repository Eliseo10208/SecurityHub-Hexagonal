import { Sensor } from '../Entities/Sensor';

export interface SensorRepository {
    createSensor(sensor: Sensor): Promise<Sensor>;
    getAllSensors(): Promise<Sensor[]>;
    getSensorById(id: number): Promise<Sensor | null>;
    updateSensor(id: number, sensor: Sensor): Promise<Sensor | null>;
    deleteSensor(id: number): Promise<void>;
}
