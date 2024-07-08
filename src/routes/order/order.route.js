import { Router } from 'express';
import { orderControllers } from '../../controllers/index.controllers.js';

const orderRouter = Router();

orderRouter.get('/', orderControllers.getAll);
orderRouter.get('/user/:id', orderControllers.getByUser);
orderRouter.post('/', orderControllers.create);
orderRouter.delete('/:id', orderControllers.remove);
orderRouter.patch('/update/status/:id', orderControllers.updateStatus);

export default orderRouter;
