import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/mysql';

const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    home: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'User',
    timestamps: false
});

export default UserModel;
