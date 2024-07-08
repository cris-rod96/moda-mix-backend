import { Router } from 'express';
import categoryRouter from './category/category.route.js';
import supplierRouter from './supplier/supplier.route.js';
import userRouter from './user/user.route.js';
import productRouter from './product/product.route.js';
import incomeRouter from './income/income.route.js';
import incomeDetailRouter from './income-detail/income-detail.route.js';
import orderRouter from './order/order.route.js';
import orderDetailRouter from './order-detail/order-detail.route.js';
import cartRouter from './cart/cart.route.js';
import cartDetailsRouter from './cart-detail/cart-detail.route.js';
import paymentRouter from './payment/payment.route.js';
import reactionRouter from './reaction/reaction.route.js';

const rootRouter = Router();

rootRouter.use('/categories', categoryRouter);
rootRouter.use('/suppliers', supplierRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/products', productRouter);
rootRouter.use('/incomes', incomeRouter);
rootRouter.use('/income-details', incomeDetailRouter);
rootRouter.use('/orders', orderRouter);
rootRouter.use('/order-details', orderDetailRouter);
rootRouter.use('/cart', cartRouter);
rootRouter.use('/cart-details', cartDetailsRouter);
rootRouter.use('/payments', paymentRouter);
rootRouter.use('/reactions', reactionRouter);
export default rootRouter;
