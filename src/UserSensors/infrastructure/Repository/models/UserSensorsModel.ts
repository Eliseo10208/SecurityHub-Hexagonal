import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../../database/mysql';

class UserSensorsModel extends Model {
    public id!: number;
    public user_id!: number;
    public sensor_data_id!: number;
    public location!: string;
}

UserSensorsModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    sensor_data_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'Sensor_Data',
            key: 'id'
        }
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'User_Sensors',
    timestamps: false,
    underscored: true
});

export default UserSensorsModel;
