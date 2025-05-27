import { Router } from 'express';
import { taskController } from './task.controller';
import { taskValidation } from './task.validation';
import validateRequest from '../../../middlewares/validateRequest';

const taskRouter = Router();

taskRouter.post(
  '/',
  validateRequest(taskValidation.createTaskSchema),
  taskController.createTask
);

taskRouter.get('/', taskController.getTasks);

taskRouter.get('/:id', taskController.getSingleTask);

taskRouter.patch(
  '/:id',
  validateRequest(taskValidation.updateTaskSchema),
  taskController.updateTask
);

taskRouter.delete('/:id', taskController.deleteTask);

export default taskRouter;
