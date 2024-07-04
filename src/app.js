import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import rootRouter from './routes/index.routes.js';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(logger('dev'));
app.use(
  express.json({
    limit: '50mb',
  })
);

app.use('/api', rootRouter);

export default app;
