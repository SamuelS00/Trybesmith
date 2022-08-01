import express from 'express';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.handler';
import productRouter from './routes/product.route';
import userRouter from './routes/user.route';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use(errorMiddleware);

export default app;
