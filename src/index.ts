import express from 'express';
import { UserRouter } from './user/infrastructure/Routes/UserRoutes';
import { SensorDataRouter } from './sensor/SensorData/infrastructure/Routes/SensorDataRoutes'; 
import { SensorRouter } from './sensor/infrastructure/Routes/SensorRoutes';
import userSensorsRoutes from './UserSensors/infrastructure/Routes/UserSensorsRoutes';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { sequelize } from './database/mysql';
import cors from 'cors';
import dotenv from 'dotenv';
import { DataTypes, Model } from 'sequelize';

// Configuración del entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["*"],
  })
);

// Definición del modelo SensorDataModel
class SensorDataModel extends Model {
  public id!: number;
  public sensor_id!: number;
  public data_type!: string;
  public data!: Buffer;
  createdAt: any;
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
  timestamps: true,
  underscored: true
});

// Rutas para los datos del sensor
app.get('/sensor-data/:dataType', async (req: Request, res: Response) => {
  const { dataType } = req.params;

  try {
    const data = await SensorDataModel.findAll({
      where: { data_type: dataType },
      order: [['createdAt', 'ASC']],
    });

    // Convertir los datos a un formato legible
    const formattedData = data.map(d => ({
      id: d.id,
      sensor_id: d.sensor_id,
      data_type: d.data_type,
      data: d.data.toString(), // Convertir el Buffer a string
      createdAt: d.createdAt, // Añadir fecha y hora
    }));

    res.json(formattedData);
  } catch (error) {
    console.error('Error al obtener los datos de sensores:', error);
    res.status(500).json({ error: 'Error al obtener los datos de sensores' });
  }
});

// Rutas existentes
app.use('/users', UserRouter);
app.use('/sensors', SensorRouter);
app.use('/user-sensors', userSensorsRoutes);
app.use('/sensor-data', SensorDataRouter);

// Manejo de errores
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.post('/users/authToken', (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return res.status(200).json({ decoded });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});