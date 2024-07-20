import { Router } from 'express';
import { DependenciesSensorData } from '../DependenciesSensorData'; // Asegúrate de importar correctamente las dependencias

const router = Router();

const createSensorDataController = DependenciesSensorData.createSensorDataController;
const getSensorDataController = DependenciesSensorData.getSensorDataController;
const deleteSensorDataController = DependenciesSensorData.deleteSensorDataController;

router.post('/', (req, res) => createSensorDataController.handle(req, res));
router.get('/:sensorId', (req, res) => getSensorDataController.handle(req, res));
router.delete('/:dataId', (req, res) => deleteSensorDataController.handle(req, res));

export { router as SensorDataRouter };
