import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { createReview } from "../../services/reviewService";

const ReviewForm = (companyId) => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    reviewText: "",
    rating: 5,
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "rating" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createReview(companyId, formData);
      setFormData({
        fullName: "",
        subject: "",
        reviewText: "",
        rating: 5,
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Full Name</label>{" "}
          <Input
            type={text}
            name="fullName"
            placeholder="Your Name"
            value={formData.fullName}
            required
            handleChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Subject</label>
          <Input
            type={text}
            name="subject"
            placeholder={Subject}
            value={formData.subject}
            handleChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Review Text</label>
          <textarea
            name="reviewText"
            placeholder="Write Review"
            value={formData.reviewText}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Rating</label>
          <Input
            type={number}
            name="rating"
            min="1"
            max="5"
            step="0.5"
            value={formData.rating}
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Profile Image URL</label>
          <Input
            type={text}
            name="image"
            placeholder="Paste Profile Image URL"
            value={formData.image}
            handleChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
