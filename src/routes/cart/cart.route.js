import { Router } from 'express';
import { cartControllers } from '../../controllers/index.controllers.js';

const cartRouter = Router();

cartRouter.get('/', cartControllers.getAll);
cartRouter.get('/user/:id', cartControllers.getByUser);
cartRouter.post('/', cartControllers.create);
cartRouter.delete('/:id', cartControllers.remove);

export default cartRouter;
