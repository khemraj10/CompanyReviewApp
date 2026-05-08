import { FaStar } from "react-icons/fa";
import Rating from "../common/Rating";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex justify-between gap-10 mt-3">
      <div className="flex gap-5 flex-1">
        <img
          src={review.userImage}
          alt={review.userName}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex flex-col items-start justify-start ml-3 flex-1">
          <div className="flex justify-between items-center gap-3 w-full">
            <div className="flex flex-col">
              <h2 className="text-base font-semibold text-gray-700 flex">
                {review.userName}
              </h2>

              <p className="text-gray-400 text-xs mt-1 flex">
                {review.reviewDate}
              </p>
            </div>
            <Rating rating={review.rating} />
          </div>

          <p className="text-gray-600 text-xs leading-10 w-full flex">
            {review.reviewText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
