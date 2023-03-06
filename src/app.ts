import express from 'express';
import productRouter from './routes/product.route';
import userRouter from './routes/user.route';

const app = express();

app.use(express.json());

app.use(productRouter);

app.use(userRouter);

export default app;
