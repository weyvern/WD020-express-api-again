import 'dotenv/config.js'; // IIFE
import express from 'express';
import errorHandler from './middlewares/errorHandler.js';
import userRouter from './routes/userRouter.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/users', userRouter);
app.use('*', (req, res) => res.send('Users API'));
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
