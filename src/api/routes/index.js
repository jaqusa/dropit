import { Router, json } from "express";
import morgan from "morgan";

export default function({ contractRoutes }) {
  const router = Router();

  router.use(json()).use(morgan("dev"));
  router.use("/contract", contractRoutes);

  return router;
}
