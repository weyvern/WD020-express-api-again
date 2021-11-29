import 'dotenv/config.js'; // IIFE
import express from 'express';
import userRouter from './routes/userRouter.js';

const app = express();
const port = process.env.PORT || 5000;

app.use('/users', userRouter);
app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
