import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Button from "../components/common/Button";
import CompanyCard from "../components/companies/CompanyCard";
import ReviewList from "../components/reviews/ReviewList";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getCompanyById } from "../services/companyService";

const ReviewDetails = () => {
  const { id } = useParams();

  const {
    data: company,
    loading,
    error,
  } = useFetch(() => getCompanyById(Number(id)));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!company) {
    return <h1>Company Not Found</h1>;
  }

  return (
    <>
      <div className="border-b border-gray-200 my-5"></div>
      <div className="mx-5 py-5 px-4 shadow-sm rounded-2xl">
        <div className="bg-white rounded-2xl ">
          <CompanyCard key={id} company={company} review={true} />
        </div>

        <div className="border-b border-gray-200 my-3"></div>

        <ReviewList companyId={id} />
      </div>
    </>
  );
};

export default ReviewDetails;
