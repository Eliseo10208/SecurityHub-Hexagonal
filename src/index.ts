import express from "express";
import morgan from "morgan";
import {Signale} from "signale";
import * as dotenv from "dotenv";
//---------------------------------------

import { userRouter } from "./user/infrastructure/Routes/UserRouter";

const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(express.json())
app.use("/users",userRouter)



const port: string | undefined = process.env.PORT ?? "3000";

const signale = new Signale();

app.listen(port,()=>{
    signale.success("Servidor escuchando en el puerto:", port);

});