import {
  createCompany,
  getAllCompanies,
  getCompanies,
} from "../repostiories/company.repository.js";

export const createCompanyController = async (req, res) => {
  try {
    const company = await createCompany(req.body);
    if (!company) {
      return res.status(500).json({ error: "Failed to create company" });
    }
    res.status(201).json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllCompaniesController = async (req, res) => {
  try {
    const companies = await getAllCompanies();
    if (!companies || companies.length === 0) {
      return res.status(404).json({ error: "No companies found" });
    }
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCompanyByIdController = async (req, res) => {
  try {
    const company = await getCompany(req.params.id);
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCompanyController = async (req, res) => {
  try {
    const { search, city, sort, page = 1, limit = 6 } = req.query;

    let query = {};

    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }

    if (city) {
      query.city = city;
    }

    const companiesQuery = await getCompanies(query);

    if (sort === "rating") {
      companiesQuery = companiesQuery.sort({
        averageRating: -1,
      });
    }

    if (sort === "latest") {
      companiesQuery = companiesQuery.sort({
        createdAt: -1,
      });
    }

    if (sort === "oldest") {
      companiesQuery = companiesQuery.sort({
        createdAt: 1,
      });
    }

    if (sort === "name") {
      companiesQuery = companiesQuery.sort({
        name: 1,
      });
    }

    const skip = (Number(page) - 1) * Number(limit);

    companiesQuery = companiesQuery.skip(skip).limit(Number(limit));

    const companies = await companiesQuery;

    res.json({
      success: true,
      count: companies.length,
      data: companies,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
