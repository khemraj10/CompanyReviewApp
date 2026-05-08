import axiosClient from "../api/axiosClient";

export const registerUser = async (data) => {
  try {
    const response = await axiosClient.post("auth/register", data);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axiosClient.post("auth/login", data);
    return response.data;
  } catch (error) {
    console.error("Error logging user: ", error);
  }
};

export const getUsers = async () => {
  try {
    const response = await axiosClient.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axiosClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
