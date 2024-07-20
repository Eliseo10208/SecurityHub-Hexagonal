import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/mysql';

const SensorsModel = sequelize.define('Sensors', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
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

export default SensorsModel;
