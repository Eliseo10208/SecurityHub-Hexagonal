import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../../../database/mysql';

class SensorDataModel extends Model {
    public id!: number;
    public sensor_id!: number;
    public data_type!: string;
    public data!: Buffer;
}

SensorDataModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    sensor_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'Sensors',
            key: 'id'
        }
    },
    data_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.BLOB,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'Sensor_Data',
    timestamps: false,
    underscored: true
});

export default SensorDataModel;
