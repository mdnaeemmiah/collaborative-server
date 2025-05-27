import mongoose from "mongoose";

export interface ITask {
  _id: string;
  title: string;
  description?: string;
  assignedTo: mongoose.Types.ObjectId;  // User ID
  status: 'pending' | 'in_progress' | 'completed';
  dueDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
}