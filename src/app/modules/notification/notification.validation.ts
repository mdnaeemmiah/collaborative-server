import { z } from 'zod';

export const createNotificationSchema = z.object({
  body: z.object({
    message: z.string().min(1, { message: "Message is required" }),
    userId: z
      .string()
      .length(24, { message: "userId must be a valid MongoDB ObjectId" }),
    read: z.boolean().optional().default(false),
  }),
});

export const updateNotificationSchema = z.object({
  body: z.object({
    message: z.string().min(1, { message: "Message is required" }).optional(),
    userId: z
      .string()
      .length(24, { message: "userId must be a valid MongoDB ObjectId" })
      .optional(),
    read: z.boolean().optional(),
  }),
});

export const notificationValidation = {
  createNotificationSchema,
  updateNotificationSchema,
};
