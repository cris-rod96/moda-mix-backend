import { Router } from 'express';
import { replyControllers } from '../../controllers/index.controllers.js';

const replyRouter = Router();

replyRouter.get('/comment/:id', replyControllers.getByComment);
replyRouter.post('/', replyControllers.create);
replyRouter.patch('/:id', replyControllers.update);
replyRouter.delete('/:id', replyControllers.remove);

export default replyRouter;
