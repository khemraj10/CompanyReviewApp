import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { createCompany } from "../../services/companyService";

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    foundedDate: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createCompany(formData);
      setFormData({
        name: "",
        logo: "",
        foundedDate: "",
        city: "",
        address: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Company</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Company Name</label>
          <Input
            type={text}
            name="name"
            placeholder="Enter Company Name"
            value={formData.name}
            required
            handleChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Logo URL</label>
          <Input
            type={text}
            name="logo"
            placeholder="Paste company logo URL"
            value={formData.logo}
            handleChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Founded Date</label>
          <Input
            type="date"
            name="foundedDate"
            placeholder="Founded Date"
            value={formData.foundedDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">City</label>
          <Input
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Address</label>
          <textarea
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            rows={4}
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {formData.logo && (
          <div>
            <p className="mb-2 font-medium">Logo Preview</p>
            <img
              src={formData.logo}
              alt="company-logo"
              className="w-24 h-24 object-cover rounded-lg border"
            />
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Submit Company
        </Button>
      </form>
    </div>
  );
};

export default CompanyForm;
