"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskValidation = exports.updateTaskSchema = exports.createTaskSchema = void 0;
const zod_1 = require("zod");
exports.createTaskSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            .min(3, { message: "Title must be at least 3 characters long" })
            .max(100, { message: "Title must be at most 100 characters long" }),
        description: zod_1.z
            .string()
            .max(500, { message: "Description must be at most 500 characters long" })
            .optional(),
        assignedTo: zod_1.z
            .string()
            .length(24, { message: "assignedTo must be a valid MongoDB ObjectId" }),
        status: zod_1.z.enum(["pending", "in_progress", "completed"]).optional().default("pending"),
        dueDate: zod_1.z
            .string()
            .optional()
            .refine((dateStr) => {
            if (!dateStr)
                return true; // optional, so allow empty
            const date = new Date(dateStr);
            return date >= new Date();
        }, {
            message: "Due date cannot be in the past",
        }),
    }),
});
exports.updateTaskSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            .min(3, { message: "Title must be at least 3 characters long" })
            .max(100, { message: "Title must be at most 100 characters long" })
            .optional(),
        description: zod_1.z
            .string()
            .max(500, { message: "Description must be at most 500 characters long" })
            .optional(),
        assignedTo: zod_1.z
            .string()
            .length(24, { message: "assignedTo must be a valid MongoDB ObjectId" })
            .optional(),
        status: zod_1.z.enum(["pending", "in_progress", "completed"]).optional(),
        dueDate: zod_1.z
            .string()
            .optional()
            .refine((dateStr) => {
            if (!dateStr)
                return true;
            const date = new Date(dateStr);
            return date >= new Date();
        }, {
            message: "Due date cannot be in the past",
        }),
    }),
});
exports.taskValidation = {
    createTaskSchema: exports.createTaskSchema,
    updateTaskSchema: exports.updateTaskSchema,
};
