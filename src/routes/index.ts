import { Router } from "express";
import authRouter from "../app/modules/auth/auth.route";
import userRouter from "../app/modules/user/user.route";
import taskRouter from "../app/modules/task/task.route";
import notificationRouter from "../app/modules/notification/notification.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/task",
    route: taskRouter,
  },
  {
    path: '/notification',
    route: notificationRouter,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
