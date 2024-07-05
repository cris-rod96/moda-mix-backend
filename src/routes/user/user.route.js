import { userControllers } from '../../controllers/index.controllers.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', userControllers.getAll);
userRouter.post('/', userControllers.create);
userRouter.delete('/:id', userControllers.remove);
userRouter.patch('/edit/:id', userControllers.update);
export default userRouter;
