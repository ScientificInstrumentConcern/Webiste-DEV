import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//api endpoints



app.listen(5000, () => {
    console.log(`app running at port:${PORT}`);
})
