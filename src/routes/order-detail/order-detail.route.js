import { Router } from 'express';
import { orderDetailControllers } from '../../controllers/index.controllers.js';

const orderDetailRouter = Router();

orderDetailRouter.post('/', orderDetailControllers.create);
orderDetailRouter.get('/', orderDetailControllers.getAll);
orderDetailRouter.get('/order/:id', orderDetailControllers.getByOrder);
orderDetailRouter.delete('/delete/:id', orderDetailControllers.remove);

export default orderDetailRouter;
