import { ITask } from './task.interface';
import { TaskModel } from './task.model';

const createTask = async (data: ITask) => {
  const result = await TaskModel.create(data);
  return result;
};

const getTasks = async () => {
  const result = await TaskModel.find();
  return result;
};

const getSingleTask = async (id: string) => {
  const result = await TaskModel.findById(id);
  return result;
};

const updateTask = async (id: string, data: Partial<ITask>) => {
  const result = await TaskModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const deleteTask = async (id: string) => {
  const result = await TaskModel.findByIdAndDelete(id);
  return result;
};

export const taskService = {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};
