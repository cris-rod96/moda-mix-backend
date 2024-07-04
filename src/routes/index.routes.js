import { Router } from 'express';
import categoryRouter from './category/category.route.js';

const rootRouter = Router();

rootRouter.use('/categories', categoryRouter);

export default rootRouter;
