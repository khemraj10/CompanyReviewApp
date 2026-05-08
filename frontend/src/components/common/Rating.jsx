import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const fillPercentage = Math.min(Math.max(rating - (star - 1), 0), 1);

        return (
          <div key={star} className="relative w-4 h-4">
            <FaStar className="absolute text-gray-300 w-4 h-4" />

            <div
              className="absolute overflow-hidden"
              style={{
                width: `${fillPercentage * 100}%`,
              }}
            >
              <FaStar className="text-yellow-400 w-4 h-4" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
