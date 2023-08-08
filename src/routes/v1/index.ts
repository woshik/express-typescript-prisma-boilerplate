import express, { Router } from "express";
import userRoute from "./user.route";

const router = express.Router();

interface Routes {
  path: string;
  route: Router;
}

const routes: Routes[] = [
  {
    path: "/users",
    route: userRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
