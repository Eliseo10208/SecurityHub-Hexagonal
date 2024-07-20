import express from 'express';
import { CreateUserSensorController } from '../Controllers/CreateUserSensorController';
import { GetUserSensorsController } from '../Controllers/GetUserSensorsController';
import { DeleteUserSensorController } from '../Controllers/DeleteUserSensorController';
import { DependenciesUserSensors } from '../DependenciesUserSensors';

const router = express.Router();

const createUserSensorController = DependenciesUserSensors.createUserSensorController;
const getUserSensorsController = DependenciesUserSensors.getUserSensorsController;
const deleteUserSensorController = DependenciesUserSensors.deleteUserSensorController;

router.post('/', (req, res) => createUserSensorController.handle(req, res));
router.get('/:userId', (req, res) => getUserSensorsController.handle(req, res));
router.delete('/:id', (req, res) => deleteUserSensorController.handle(req, res)); // Aquí se usa solo el ID primario

export default router;
