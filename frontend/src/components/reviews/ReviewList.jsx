import useFetch from "../../hooks/useFetch";
import { getReviews } from "../../services/reviewService";
import ReviewCard from "./ReviewCard";

const ReviewList = (companyId) => {
  const { data: reviews, loading, error } = useFetch(getReviews(companyId));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="flex flex-col">
      <p className="text-gray-400 text-xs flex items-center justify-start">
        Result Found: {reviews.length}
      </p>

      <div className="flex flex-col gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
