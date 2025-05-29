"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notification_controller_1 = require("./notification.controller");
const notification_validation_1 = require("./notification.validation");
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const notificationRouter = (0, express_1.Router)();
notificationRouter.post('/create', (0, validateRequest_1.default)(notification_validation_1.notificationValidation.createNotificationSchema), notification_controller_1.notificationController.createNotification);
notificationRouter.get('/', notification_controller_1.notificationController.getNotifications);
notificationRouter.get('/:id', notification_controller_1.notificationController.getSingleNotification);
notificationRouter.patch('/:id', (0, validateRequest_1.default)(notification_validation_1.notificationValidation.updateNotificationSchema), notification_controller_1.notificationController.updateNotification);
notificationRouter.delete('/:id', notification_controller_1.notificationController.deleteNotification);
exports.default = notificationRouter;
