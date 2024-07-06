import { Router } from 'express';
import { incomeDetailControllers } from '../../controllers/index.controllers.js';

const incomeDetailRouter = Router();

incomeDetailRouter.get('/', incomeDetailControllers.getAll);
incomeDetailRouter.get('/income/:id', incomeDetailControllers.getByIncome);
incomeDetailRouter.post('/', incomeDetailControllers.create);
incomeDetailRouter.delete('/:id', incomeDetailControllers.remove);

export default incomeDetailRouter;
