import User from "../models/user.model.js";

export const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.error("Error fetching user by mail:", error);
  }
};

export const createUser = async ({ username, email, password }) => {
  try {
    const user = await User.create({ username, email, password });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
