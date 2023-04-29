import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dataBaseConnection } from './db.js';
import { signUpRoute } from './routes/signUpRoute.js';
import { logInRoute } from './routes/logInRoute.js';
import { ResetRoutes } from './routes/passwordReset.js';

const app = express();
dotenv.config();
app.use(cors());
dataBaseConnection();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to the Password reset Spot")
})

app.use("/signUp",signUpRoute);
app.use("/logIn",logInRoute);
app.use("/",ResetRoutes);

app.listen(process.env.PORT);