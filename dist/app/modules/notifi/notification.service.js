"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationService = void 0;
const notification_model_1 = require("./notification.model");
const mongoose_1 = __importDefault(require("mongoose"));
const createNotification = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const notification = yield notification_model_1.NotificationModel.create(data);
    return notification;
});
const getNotifications = () => __awaiter(void 0, void 0, void 0, function* () {
    const notifications = yield notification_model_1.NotificationModel.find();
    return notifications;
});
const getSingleNotification = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid notification ID');
    }
    const notification = yield notification_model_1.NotificationModel.findById(id);
    return notification;
});
const updateNotification = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid notification ID');
    }
    const updatedNotification = yield notification_model_1.NotificationModel.findByIdAndUpdate(id, data, {
        new: true,
    });
    return updatedNotification;
});
const deleteNotification = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid notification ID');
    }
    const deletedNotification = yield notification_model_1.NotificationModel.findByIdAndDelete(id);
    return deletedNotification;
});
exports.notificationService = {
    createNotification,
    getNotifications,
    getSingleNotification,
    updateNotification,
    deleteNotification,
};
