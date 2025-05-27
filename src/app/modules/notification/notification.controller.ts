import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import AppError from '../../../errors/AppError';
import { NotificationModel } from './notification.model';
import mongoose from 'mongoose';

// Create Notification
const createNotification = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const notification = await NotificationModel.create(data);
  
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Notification created successfully',
    data: notification,
  });
});

// Get All Notifications
const getNotifications = catchAsync(async (req: Request, res: Response) => {
  const notifications = await NotificationModel.find();
  
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Notifications fetched successfully',
    data: notifications,
  });
});

// Get Single Notification
const getSingleNotification = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid notification ID');
  }

  const notification = await NotificationModel.findById(id);
  if (!notification) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Notification not found');
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Notification fetched successfully',
    data: notification,
  });
});

// Update Notification
const updateNotification = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid notification ID');
  }

  const updatedNotification = await NotificationModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updatedNotification) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Notification not found');
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Notification updated successfully',
    data: updatedNotification,
  });
});

// Delete Notification
const deleteNotification = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid notification ID');
  }

  const deletedNotification = await NotificationModel.findByIdAndDelete(id);
  if (!deletedNotification) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Notification not found');
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Notification deleted successfully',
    data: deletedNotification,
  });
});

export const notificationController = {
  createNotification,
  getNotifications,
  getSingleNotification,
  updateNotification,
  deleteNotification,
};
