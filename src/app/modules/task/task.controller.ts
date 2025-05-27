import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import AppError from '../../../errors/AppError';
import { taskService } from './task.service'; 

// Create Task
const createTask = catchAsync(async (req: Request, res: Response) => {
  const taskData = req.body;
  const result = await taskService.createTask(taskData);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Task created successfully',
    data: result,
  });
});

// Get all tasks
const getTasks = catchAsync(async (req: Request, res: Response) => {
  const result = await taskService.getTasks();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tasks retrieved successfully',
    data: result,
  });
});

// Get single task by id
const getSingleTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid task ID');
  }

  const result = await taskService.getSingleTask(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Task retrieved successfully',
    data: result,
  });
});

// Update task by id
const updateTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid task ID');
  }

  const result = await taskService.updateTask(id, updateData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Task updated successfully',
    data: result,
  });
});

// Delete task by id
const deleteTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid task ID');
  }

  const deletedTask = await taskService.deleteTask(id);

  if (!deletedTask) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Task not found');
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Task deleted successfully',
    data: deletedTask,
  });
});

export const taskController = {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};
