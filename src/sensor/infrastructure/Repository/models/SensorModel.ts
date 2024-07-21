import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/mysql';

export const Sensor = sequelize.define('Sensor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'Sensors',
    timestamps: false
});
