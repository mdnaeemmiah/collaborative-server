import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),
  
  description: z
    .string()
    .max(500, { message: "Description must be at most 500 characters long" })
    .optional(),
  
  assignedTo: z
    .string()
    .length(24, { message: "assignedTo must be a valid MongoDB ObjectId" }),
  
  status: z.enum(["pending", "in_progress", "completed"]).default("pending"),
  
  dueDate: z
    .string()
    .optional()
    .refine((dateStr) => {
      if (!dateStr) return true; // optional, so allow empty
      const date = new Date(dateStr);
      return date >= new Date();
    }, {
      message: "Due date cannot be in the past",
    }),
});
