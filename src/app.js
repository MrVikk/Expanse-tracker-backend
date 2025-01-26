import dotenv from "dotenv"
import express from "express";
import sequelize from './config/sequelize.js';
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

dotenv.config()

app.use(express.json());
app.use(cookieParser());

// DATABASE CONNECTION
sequelize
    .authenticate()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log("error connecting database", err));

sequelize.sync().then(() => {
    console.log("Database tables synced");
});


export default app;