import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { loginUser } from "../../services/userServices";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      localStorage.setItem("token", response.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Login Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <Input
            type={email}
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            required
            handleChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Password</label>
          <Input
            type={password}
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            required
            handleChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
