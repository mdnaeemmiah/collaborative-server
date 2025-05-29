"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationValidation = exports.updateNotificationSchema = exports.createNotificationSchema = void 0;
const zod_1 = require("zod");
exports.createNotificationSchema = zod_1.z.object({
    body: zod_1.z.object({
        message: zod_1.z.string().min(1, { message: "Message is required" }),
        userId: zod_1.z
            .string()
            .length(24, { message: "userId must be a valid MongoDB ObjectId" }),
        read: zod_1.z.boolean().optional().default(false),
    }),
});
exports.updateNotificationSchema = zod_1.z.object({
    body: zod_1.z.object({
        message: zod_1.z.string().min(1, { message: "Message is required" }).optional(),
        userId: zod_1.z
            .string()
            .length(24, { message: "userId must be a valid MongoDB ObjectId" })
            .optional(),
        read: zod_1.z.boolean().optional(),
    }),
});
exports.notificationValidation = {
    createNotificationSchema: exports.createNotificationSchema,
    updateNotificationSchema: exports.updateNotificationSchema,
};
