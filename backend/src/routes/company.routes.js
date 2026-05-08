import express from "express";
import {
  createCompanyController,
  getAllCompaniesController,
  getCompanyByIdController,
  getCompanyController,
} from "../controllers/company.controller.js";

const router = express.Router();

router.post("/", createCompanyController);
// router.get("/", getAllCompaniesController);
router.get("/:id", getCompanyByIdController);
router.get("/", getCompanyController);

export default router;
