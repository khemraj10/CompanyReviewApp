import { useParams } from "react-router-dom";
import ReviewForm from "../components/reviews/ReviewForm";

const AddReviewPage = () => {
  const { id } = useParams();
  return <ReviewForm companyId={id} />;
};

export default AddReviewPage;
