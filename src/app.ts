import express from 'express';
import morgan from 'morgan';

import errorMiddleware from './middlewares/errorHandler';
import authRouter from './routes/AuthRouter';
import orderRouter from './routes/OrderRouter';
import productRouter from './routes/ProductRouter';
import userRouter from './routes/UserRouter';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use(authRouter);
app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);

app.use(errorMiddleware);

export default app;
