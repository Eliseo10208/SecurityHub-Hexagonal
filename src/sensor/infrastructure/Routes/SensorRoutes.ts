import { Router } from 'express';
import { DependenciesSensor } from '../DependenciesSensor';

const router = Router();

const createSensorController = DependenciesSensor.createSensorController();
router.post('/', (req, res) => createSensorController.handle(req, res));

const getAllSensorsController = DependenciesSensor.getAllSensorsController();
router.get('/', (req, res) => getAllSensorsController.handle(req, res));

const getSensorController = DependenciesSensor.getSensorController();
router.get('/:id', (req, res) => getSensorController.handle(req, res));

const updateSensorController = DependenciesSensor.updateSensorController();
router.put('/:id', (req, res) => updateSensorController.handle(req, res));

const deleteSensorController = DependenciesSensor.deleteSensorController();
router.delete('/:id', (req, res) => deleteSensorController.handle(req, res));

export { router as SensorRouter };
