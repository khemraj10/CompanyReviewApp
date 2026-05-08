import axiosClient from "../api/axiosClient";

const companies = [
  {
    id: 1,
    name: "Graffersid Web and App Development",
    address: "Indore",
    foundedDate: "01-01-2016",
    rating: 4.5,
    reviews: 41,
  },
  {
    id: 2,
    name: "Code Tech Company",
    address: "Bhopal",
    foundedDate: "01-01-2017",
    rating: 4.2,
    reviews: 20,
  },
  {
    id: 3,
    name: "Innogent Pvt. Ltd.",
    address: "910, Shekhar Central, Indore (M.P.)",
    foundedDate: "01-01-2016",
    rating: 4.5,
    reviews: 10,
  },
];

export const getCompanies = async () => {
  try {
    const response = await axiosClient.get("/companies");
    return response.data;
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw error;
  }
};

export const getCompanyById = async (id) => {
  try {
    const response = await axiosClient.get(`/companies/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching company with id ${id}:`, error);
    throw error;
  }
};

export const createCompany = async (companyData) => {
  try {
    const response = await axiosClient.post("/companies", companyData);
    return response.data;
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
};
