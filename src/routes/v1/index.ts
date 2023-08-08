import express, { Router } from "express";

const router = express.Router();

interface Routes {
  path: string;
  route: Router;
}

const routes: Routes[] = [];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
