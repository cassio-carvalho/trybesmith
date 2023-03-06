import express from 'express';
import orderRouter from './routes/order.route';
import productRouter from './routes/product.route';
import userRouter from './routes/user.route';

const app = express();

app.use(express.json());

app.use(productRouter);

app.use(userRouter);

app.use(orderRouter);

export default app;
