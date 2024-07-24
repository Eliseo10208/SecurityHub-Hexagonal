import express from 'express';
import { UserRouter } from './user/infrastructure/Routes/UserRoutes';
import { SensorRouter } from './sensor/infrastructure/Routes/SensorRoutes';
import { SensorDataRouter } from './sensor/SensorData/infrastructure/Routes/SensorDataRoutes'; 
import userSensorsRoutes from './UserSensors/infrastructure/Routes/UserSensorsRoutes';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
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

app.post('/users/authToken', (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);    return res.status(200).json({ decoded });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});