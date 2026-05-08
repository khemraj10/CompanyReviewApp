import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const payload = {
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  };
  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
};

export default generateToken;
