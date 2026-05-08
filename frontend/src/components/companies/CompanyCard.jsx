import { FaStar } from "react-icons/fa";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import Rating from "../common/Rating";

const CompanyCard = ({ company, review }) => {
  const navigate = useNavigate();

  const handleReview = () => {
    navigate(`/companies/${company.id}/reviews`);
  };
  return (
    <div
      className={`bg-white
        rounded-2xl
        ${review ? "shadow-none" : "shadow-sm p-4"}
        flex
        justify-between
        `}
    >
      <div className="flex text-xs self-stretch">
        <img
          src={company?.logo}
          alt={company?.name}
          className="w-20 h-20 rounded-lg object-cover"
        />

        <div className="flex flex-col items-start justify-start ml-3">
          <h2 className="text-sm font-semibold text-gray-800 flex">
            {company?.name}
          </h2>

          <p className="text-gray-500 text-[10px] my-1 flex">
            {company?.address}
          </p>

          <div className="flex items-center mt-2 justify-end gap-3 text-xs font-semibold">
            <span>{company?.rating}</span>

            <Rating rating={company?.rating} />

            <span className="ml-4">{company?.reviews} Reviews</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between self-stretch w-fit ">
        <p className="text-gray-600 text-[9px]">
          Founded on {company?.foundedDate}
        </p>

        {!review ? (
          <Button
            onClick={handleReview}
            className="bg-gray-800 text-white px-4 py-1.5 rounded-lg text-xs"
          >
            Detail Review
          </Button>
        ) : (
          <Button
            className="bg-linear-to-br from-fuchsia-500 to-indigo-700 text-white px-4 py-1.5 rounded-lg text-xs"
            onClick={() => navigate("/companies/:id/reviews/add-review")}
          >
            + Add Review
          </Button>
        )}
      </div>
    </div>
  );
};

export default CompanyCard;
