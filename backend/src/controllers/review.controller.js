import { updateCompanyRating } from "../repostiories/company.repository.js";
import {
  createReview,
  getCompanyReviews,
} from "../repostiories/reveiw.repository.js";

export const createReviewController = async (req, res) => {
  try {
    const { companyId } = req.params;
    const review = await createReview(companyId, req.body);
    if (!review) {
      return res.status(500).json({ error: "Failed to create review" });
    }

    await updateCompanyRating(companyId);

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCompanyReviewsController = async (req, res) => {
  try {
    const reviews = await getCompanyReviews(req.params.companyId);
    if (!reviews || reviews.length === 0) {
      return res
        .status(404)
        .json({ error: "No reviews found for this company" });
    }
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
