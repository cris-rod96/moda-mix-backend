import { Router } from 'express';
import categoryRouter from './category/category.route.js';
import supplierRouter from './supplier/supplier.route.js';
import userRouter from './user/user.route.js';
import productRouter from './product/product.route.js';
import incomeRouter from './income/income.route.js';
import incomeDetailRouter from './income-detail/income-detail.route.js';
import orderRouter from './order/order.route.js';
const rootRouter = Router();

rootRouter.use('/categories', categoryRouter);
rootRouter.use('/suppliers', supplierRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/products', productRouter);
rootRouter.use('/incomes', incomeRouter);
rootRouter.use('/income-details', incomeDetailRouter);
rootRouter.use('/orders', orderRouter);
export default rootRouter;
