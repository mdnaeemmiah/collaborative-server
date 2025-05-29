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
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskService = void 0;
const task_model_1 = require("./task.model");
const createTask = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.TaskModel.create(data);
    return result;
});
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.TaskModel.find();
    return result;
});
const getSingleTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.TaskModel.findById(id);
    return result;
});
const updateTask = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.TaskModel.findByIdAndUpdate(id, data, {
        new: true,
    });
    return result;
});
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.TaskModel.findByIdAndDelete(id);
    return result;
});
exports.taskService = {
    createTask,
    getTasks,
    getSingleTask,
    updateTask,
    deleteTask,
};
