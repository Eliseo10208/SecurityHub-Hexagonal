import { SensorRepository } from '../../domain/Interface/SensorRepository';
import { Sensor } from '../../domain/Entities/Sensor';
import { Sensor as SensorModel } from './models/SensorModel';

export class MysqlSensorRepository implements SensorRepository {
    async createSensor(sensor: Sensor): Promise<Sensor> {
        const newSensor = await SensorModel.create({
            type: sensor.type,
            description: sensor.description
        });
        return new Sensor(
            newSensor.get('type') as string,
            newSensor.get('description') as string,
            newSensor.get('id') as number,
        );
    }

    async getAllSensors(): Promise<Sensor[]> {
        const sensors = await SensorModel.findAll();
        return sensors.map(sensor => new Sensor(
            sensor.get('type') as string,
            sensor.get('description') as string,
            sensor.get('id') as number
        ));
    }

    async getSensorById(id: number): Promise<Sensor | null> {
        const sensor = await SensorModel.findByPk(id);
        if (!sensor) return null;
        return new Sensor(
            sensor.get('type') as string,
            sensor.get('description') as string,
            sensor.get('id') as number
        );
    }

    async updateSensor(id: number, sensor: Sensor): Promise<Sensor | null> {
        const [updateCount, updatedSensors] = await SensorModel.update({
            type: sensor.type,
            description: sensor.description
        }, {
            where: { id },
            returning: true
        });

        if (updateCount > 0) {
            const updatedSensor = updatedSensors[0];
            return new Sensor(
                updatedSensor.get('type') as string,
                updatedSensor.get('description') as string,
                updatedSensor.get('id') as number,
            );
        }

        return null;
    }

    async deleteSensor(id: number): Promise<void> {
        await SensorModel.destroy({
            where: { id }
        });
    }
}
