import { Router } from 'express';
import { DependenciesUser } from '../DependenciesUser';

const router = Router();

const createUserController = DependenciesUser.createUserController();
router.post('/', (req, res) => createUserController.handle(req, res));

const deleteUserController = DependenciesUser.deleteUserController();
router.delete('/:id', (req, res) => deleteUserController.handle(req, res));

const getAllUserController = DependenciesUser.getAllUserController();
router.get('/', (req, res) => getAllUserController.handle(req, res));

const getUserController = DependenciesUser.getUserController();
router.get('/:id', (req, res) => getUserController.handle(req, res));

const authUserCaseController = DependenciesUser.authUserCaseController();
router.post('/login', (req, res) => authUserCaseController.handle(req, res));

const updateUserPasswordController = DependenciesUser.updateUserPasswordController();
router.put('/update-password/:email', (req, res) => updateUserPasswordController.handle(req, res));

export { router as UserRouter };
