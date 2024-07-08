import { Router } from 'express';
import { reactionControllers } from '../../controllers/index.controllers.js';

const reactionRouter = Router();

reactionRouter.get('/user/:id', reactionControllers.getByUser);
reactionRouter.get('/product/:id', reactionControllers.getByProduct);
reactionRouter.post('/', reactionControllers.create);
reactionRouter.delete('/:id', reactionControllers.remove);
reactionRouter.patch('/:id', reactionControllers.update);

export default reactionRouter;
