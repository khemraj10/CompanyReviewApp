import Company from "../models/company.model.js";
import Review from "../models/review.model.js";

export const createCompany = async (data) => {
  try {
    const company = await Company.create(data);
    return company;
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
};

export const getAllCompanies = async () => {
  try {
    const companies = await Company.find();
    return companies;
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw error;
  }
};

export const getCompany = async (id) => {
  try {
    const company = await Company.findById(id);
    return company;
  } catch (error) {
    console.error("Error fetching company:", error);
    throw error;
  }
};

export const updateCompany = async (id, data) => {
  try {
    const company = await Company.findByIdAndUpdate(id, data);
    return company;
  } catch (error) {
    console.error("Error updating company:", error);
    throw error;
  }
};

export const getCompanies = async (query) => {
  try {
    let companiesData = Company.find(query);
    return companiesData;
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw error;
  }
};

export const updateCompanyRating = async (companyId) => {
  const stats = await Review.aggregate([
    {
      $match: {
        company: new mongoose.Types.ObjectId(companyId),
      },
    },
    {
      $group: {
        _id: "$company",
        averageRating: {
          $avg: "$rating",
        },
        totalReviews: {
          $sum: 1,
        },
      },
    },
  ]);

  await updateCompany(companyId, {
    averageRating: stats[0]?.averageRating || 0,
    totalReviews: stats[0]?.totalReviews || 0,
  });
};
