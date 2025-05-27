import mongoose, { Document, Schema } from "mongoose";
import { ITask } from "./task.interface";

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String },
    assignedTo: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["pending", "in_progress", "completed"],
      default: "pending",
    },
    dueDate: { type: Date },
  },
  { timestamps: true }
);

export const TaskModel = mongoose.model<ITask>("TaskModel", taskSchema);
