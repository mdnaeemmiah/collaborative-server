import mongoose from "mongoose";

export interface TNotification {
  _id: string;
  message: string;
  userId: mongoose.Types.ObjectId;   // User ID
  read: boolean;
  createdAt: Date;
}