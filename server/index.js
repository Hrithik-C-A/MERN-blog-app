import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import dbConnect from './config/dbConnect.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

const port = process.env.PORT;

//Database connection
dbConnect();

const app = express();

//Middlewares
app.use(cors({
    origin: `${process.env.FRONTEND_URI}`,
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Entry point
app.get('/', (req, res) => {
    res.send('Server is running!');
})

//Error handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`App is running on ${port}`);
})