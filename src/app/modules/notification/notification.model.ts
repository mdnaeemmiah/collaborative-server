import mongoose, { Document, Schema } from 'mongoose';
import { TNotification } from './notification.interface';


const notificationSchema = new Schema<TNotification>(
  {
    message: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const NotificationModel = mongoose.model<TNotification>('NotificationModel', notificationSchema);
