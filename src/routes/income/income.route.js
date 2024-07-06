import { Router } from 'express';
import { incomeControllers } from '../../controllers/index.controllers.js';

const incomeRouter = Router();

incomeRouter.get('/', incomeControllers.getAll);
incomeRouter.post('/', incomeControllers.create);
incomeRouter.delete('/:id', incomeControllers.remove);
incomeRouter.patch('/edit/:id', incomeControllers.update);

export default incomeRouter;
