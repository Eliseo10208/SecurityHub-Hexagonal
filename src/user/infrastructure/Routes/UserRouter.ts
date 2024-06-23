import express from 'express'
import { createUserController,deleteUserController,getAllUserController } from '../DependenciesUser'

export const userRouter = express.Router();

userRouter.get(
    "/",
    getAllUserController.run.bind(getAllUserController)

);
userRouter.post(
    "/",
    createUserController.run.bind(createUserController)
);
userRouter.delete(
    "/:idUser",
    deleteUserController.run.bind(deleteUserController)
)