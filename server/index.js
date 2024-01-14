import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import dbConnect from './db/dbConnect.js';

const port = process.env.PORT;

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

app.listen(port, () => {
    console.log(`App is running on ${port}`);
})