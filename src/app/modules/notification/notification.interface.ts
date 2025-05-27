export interface Notification {
  _id: string;
  message: string;
  userId: string;   // User ID
  read: boolean;
  createdAt: Date;
}