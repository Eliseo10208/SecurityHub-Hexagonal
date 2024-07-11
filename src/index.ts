import express from 'express';
import { UserRouter } from './user/infrastructure/Routes/UserRoutes';
import { sequelize } from './database/mysql';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    // Sincronizar modelos con la base de datos, comentar en producción
    //sequelize.sync({ force: true }).then(() => {
     // console.log('Database synced');
   // });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Rutas
app.use('/users', UserRouter);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

