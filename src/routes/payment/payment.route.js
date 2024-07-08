import { Router } from 'express';
import { paymentControllers } from '../../controllers/index.controllers.js';

const paymentRouter = Router();

paymentRouter.get('/', paymentControllers.getAll);
paymentRouter.get('/:id', paymentControllers.getById);
paymentRouter.get('/user/:id', paymentControllers.getByUser);
paymentRouter.post('/', paymentControllers.create);
paymentRouter.delete('/remove/:id', paymentControllers.remove);
paymentRouter.patch(
  '/update/payment/voucher/:id',
  paymentControllers.setVoucher
);
paymentRouter.patch(
  '/update/payment/status-payment/:id',
  paymentControllers.setStatusPayment
);

export default paymentRouter;
