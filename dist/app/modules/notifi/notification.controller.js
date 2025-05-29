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
exports.notificationController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const AppError_1 = __importDefault(require("../../../errors/AppError"));
const notification_model_1 = require("./notification.model");
const mongoose_1 = __importDefault(require("mongoose"));
// Create Notification
const createNotification = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const notification = yield notification_model_1.NotificationModel.create(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: 'Notification created successfully',
        data: notification,
    });
}));
// Get All Notifications
const getNotifications = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notifications = yield notification_model_1.NotificationModel.find();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Notifications fetched successfully',
        data: notifications,
    });
}));
// Get Single Notification
const getSingleNotification = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Invalid notification ID');
    }
    const notification = yield notification_model_1.NotificationModel.findById(id);
    if (!notification) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Notification not found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Notification fetched successfully',
        data: notification,
    });
}));
// Update Notification
const updateNotification = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Invalid notification ID');
    }
    const updatedNotification = yield notification_model_1.NotificationModel.findByIdAndUpdate(id, data, {
        new: true,
    });
    if (!updatedNotification) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Notification not found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Notification updated successfully',
        data: updatedNotification,
    });
}));
// Delete Notification
const deleteNotification = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Invalid notification ID');
    }
    const deletedNotification = yield notification_model_1.NotificationModel.findByIdAndDelete(id);
    if (!deletedNotification) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Notification not found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Notification deleted successfully',
        data: deletedNotification,
    });
}));
exports.notificationController = {
    createNotification,
    getNotifications,
    getSingleNotification,
    updateNotification,
    deleteNotification,
};
