import express from 'express';
import loginRouter from './routes/login.route';
import orderRouter from './routes/order.route';
import productRouter from './routes/product.route';
import userRouter from './routes/user.route';

const app = express();

app.use(express.json());

app.use(loginRouter);

app.use(productRouter);

app.use(userRouter);

app.use(orderRouter);

export default app;
