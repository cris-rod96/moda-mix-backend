import { Router } from 'express';
import { categoryControllers } from '../../controllers/index.controllers.js';

const categoryRouter = Router();

categoryRouter.get('/', categoryControllers.getAll);
categoryRouter.post('/', categoryControllers.create);
categoryRouter.delete('/:id', categoryControllers.remove);
categoryRouter.patch('/edit/:id', categoryControllers.update);

export default categoryRouter;
