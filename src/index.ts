import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { router } from './router';




const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router)
app.use(morgan('dev'));


const port = process.env.PORT || 2813;


app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))