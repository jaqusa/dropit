import { Router } from "express";

module.exports = ({ contractController }) => {
  const router = Router();

  router.post("/", contractController.createContract.bind(contractController));

  return router;
};
