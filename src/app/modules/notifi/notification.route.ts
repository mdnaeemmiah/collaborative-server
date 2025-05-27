import { Router } from 'express';
import { notificationController } from './notification.controller';
import { notificationValidation } from './notification.validation';
import validateRequest from '../../../middlewares/validateRequest';

const notificationRouter = Router();

notificationRouter.post(
  '/create',
  validateRequest(notificationValidation.createNotificationSchema),
  notificationController.createNotification
);

notificationRouter.get('/', notificationController.getNotifications);

notificationRouter.get('/:id', notificationController.getSingleNotification);

notificationRouter.patch(
  '/:id',
  validateRequest(notificationValidation.updateNotificationSchema),
  notificationController.updateNotification
);

notificationRouter.delete('/:id', notificationController.deleteNotification);

export default notificationRouter;
