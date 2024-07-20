import express from 'express';
import { UserRouter } from './user/infrastructure/Routes/UserRoutes';
import { SensorRouter } from './sensor/infrastructure/Routes/SensorRoutes';
import { SensorDataRouter } from './sensor/SensorData/infrastructure/Routes/SensorDataRoutes'; 
import userSensorsRoutes from './UserSensors/infrastructure/Routes/UserSensorsRoutes';

import { sequelize } from './database/mysql';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/users', UserRouter);
app.use('/sensors', SensorRouter);
app.use('/sensor-data', SensorDataRouter);
app.use('/user-sensors', userSensorsRoutes);


app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

