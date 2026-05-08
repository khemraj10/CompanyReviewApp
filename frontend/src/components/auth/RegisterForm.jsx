import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { registerUser } from "../../services/userServices";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      localStorage.setItem("token", response.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Register Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">User Name</label>
          <Input
            type={text}
            name="name"
            placeholder="Enter Name"
            value={formData.username}
            handleChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <Input
            type={email}
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            handleChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Password</label>
          <Input
            type={password}
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            handleChange={handleChange}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
