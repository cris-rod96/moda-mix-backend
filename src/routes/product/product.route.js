import { Router } from 'express';
import { productControllers } from '../../controllers/index.controllers.js';

const productRouter = Router();

productRouter.get('/', productControllers.getAll);
productRouter.post('/', productControllers.create);
productRouter.delete('/:id', productControllers.remove);
productRouter.patch('/edit/:id', productControllers.update);

export default productRouter;
