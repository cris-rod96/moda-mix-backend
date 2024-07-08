import { Router } from 'express';
import { commentControllers } from '../../controllers/index.controllers.js';

const commentRouter = Router();
commentRouter.get('/', commentControllers.getAll);
commentRouter.post('/', commentControllers.create);
commentRouter.get('/user/:id', commentControllers.getByUser);
commentRouter.get('/product/:id', commentControllers.getByProduct);
commentRouter.patch('/:id', commentControllers.update);
commentRouter.delete('/:id', commentControllers.remove);

export default commentRouter;
