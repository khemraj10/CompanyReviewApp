import express from "express";
import {
  createReviewController,
  getCompanyReviewsController,
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/:id", createReviewController);
router.get("/:id", getCompanyReviewsController);

export default router;
