import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

const app = express();

//Entry point

app.get('/', (req, res) => {
    res.send('Server is running!');
})

app.listen(port, () => {
    console.log(`App is running on ${port}`);
})