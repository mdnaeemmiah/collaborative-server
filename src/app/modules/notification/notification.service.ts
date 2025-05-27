import { NotificationModel } from './notification.model';
import { TNotification } from './notification.interface'; // তোমার টাইপ যদি থাকে
import mongoose from 'mongoose';

const createNotification = async (data: Partial<TNotification>) => {
  const notification = await NotificationModel.create(data);
  return notification;
};

const getNotifications = async () => {
  const notifications = await NotificationModel.find();
  return notifications;
};

const getSingleNotification = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid notification ID');
  }
  const notification = await NotificationModel.findById(id);
  return notification;
};

const updateNotification = async (id: string, data: Partial<TNotification>) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid notification ID');
  }
  const updatedNotification = await NotificationModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedNotification;
};

const deleteNotification = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid notification ID');
  }
  const deletedNotification = await NotificationModel.findByIdAndDelete(id);
  return deletedNotification;
};

export const notificationService = {
  createNotification,
  getNotifications,
  getSingleNotification,
  updateNotification,
  deleteNotification,
};
