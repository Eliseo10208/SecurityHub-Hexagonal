import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME!, 
  process.env.DB_USERNAME!, 
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: parseInt(process.env.DB_PORT || '3306')
  }
);

sequelize.authenticate()
  .then(async () => {
    console.log('Connection has been established successfully.');

 // Importar modelos
 const { default: UserModel } = await import('../user/infrastructure/Repository/models/UserModel');
 const { default: SensorsModel } = await import('../sensor/infrastructure/Repository/models/SensorModel');
 const { default: UserSensorsModel } = await import('../UserSensors/infrastructure/Repository/models/UserSensorsModel');
 const { default: SensorDataModel } = await import('../sensor/SensorData/infrastructure/Repository/models/SensorDataModel');

    // Establecer asociaciones
    UserModel.hasMany(UserSensorsModel, { foreignKey: 'user_id' });
    SensorDataModel.hasMany(UserSensorsModel, { foreignKey: 'sensor_data_id' });
    UserSensorsModel.belongsTo(UserModel, { foreignKey: 'user_id' });
    UserSensorsModel.belongsTo(SensorDataModel, { foreignKey: 'sensor_data_id' });

    SensorsModel.hasMany(SensorDataModel, { foreignKey: 'sensor_id' });
    SensorDataModel.belongsTo(SensorsModel, { foreignKey: 'sensor_id' });

    // Eliminar restricciones de claves foráneas
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    
    // Sincronizar modelos con la base de datos, comentado en producción
    // await sequelize.sync({ force: true });

    // Restaurar restricciones de claves foráneas
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    console.log('Database & tables created!');
  })
  .catch(err => console.error('Unable to connect to the database:', err));
