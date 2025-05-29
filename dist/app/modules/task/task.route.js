"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("./task.controller");
const task_validation_1 = require("./task.validation");
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const taskRouter = (0, express_1.Router)();
taskRouter.post('/create', (0, validateRequest_1.default)(task_validation_1.taskValidation.createTaskSchema), task_controller_1.taskController.createTask);
taskRouter.get('/', task_controller_1.taskController.getTasks);
taskRouter.get('/:id', task_controller_1.taskController.getSingleTask);
taskRouter.patch('/:id', (0, validateRequest_1.default)(task_validation_1.taskValidation.updateTaskSchema), task_controller_1.taskController.updateTask);
taskRouter.delete('/:id', task_controller_1.taskController.deleteTask);
exports.default = taskRouter;
