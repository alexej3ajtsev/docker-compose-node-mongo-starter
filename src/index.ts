import 'dotenv/config';
import mongoose from "mongoose";
import connect from './connect';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app: Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api', router);
app.listen(process.env.PORT, () => console.log(`Server up and running on port: ${process.env.PORT}`));

const db = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo:27017/${process.env.DB_NAME}?authSource=admin`;
connect({ db });