import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './docs/swagger_output.json';

import errorMiddleware from './middlewares/errorHandler';

import {
  authRouter,
  orderRouter,
  productRouter,
  userRouter,
} from './routes';

/** Middleware */
const app = express();
app.use(express.json());
app.use(morgan('tiny'));

/** Swagger */
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(errorMiddleware);

/** Routes */
app.use(authRouter);
app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);

export default app;
