export interface Task {
  _id: string;
  title: string;
  description?: string;
  assignedTo: string;  // User ID
  status: 'pending' | 'in_progress' | 'completed';
  dueDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
}