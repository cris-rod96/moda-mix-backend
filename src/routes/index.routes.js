import { Router } from 'express';
import categoryRouter from './category/category.route.js';
import supplierRouter from './supplier/supplier.route.js';
const rootRouter = Router();

rootRouter.use('/categories', categoryRouter);
rootRouter.use('/suppliers', supplierRouter);

export default rootRouter;
