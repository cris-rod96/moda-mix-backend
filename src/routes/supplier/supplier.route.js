import { Router } from 'express';
import { supplierControllers } from '../../controllers/index.controllers.js';

const supplierRouter = Router();

supplierRouter.get('/', supplierControllers.getAll);
supplierRouter.post('/', supplierControllers.create);
supplierRouter.delete('/:id', supplierControllers.remove);
supplierRouter.patch('/edit/:id', supplierControllers.update);

export default supplierRouter;
