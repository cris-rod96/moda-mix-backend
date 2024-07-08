import { Router } from 'express';
import { cartDetailControllers } from '../../controllers/index.controllers.js';

const cartDetailsRouter = Router();

cartDetailsRouter.get('/cart/:id', cartDetailControllers.getByCart);
cartDetailsRouter.post('/', cartDetailControllers.create);
cartDetailsRouter.delete('/:id', cartDetailControllers.remove);

export default cartDetailsRouter;
