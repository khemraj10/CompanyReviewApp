import Review from "../models/review.model.js";

export const createReview = async (data) => {
  try {
    const review = await Review.create({
      ...data,
      companyId: data.companyId,
    });
    return review;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
};

export const getCompanyReviews = async (companyId) => {
  try {
    const reviews = await Review.find({ companyId: companyId });
    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};
