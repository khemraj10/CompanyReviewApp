import useFetch from "../../hooks/useFetch";
import { getCompanies } from "../../services/companyService";
import CompanyCard from "./CompanyCard";

const CompanyList = () => {
  const debouncedGetCompanies = useDebounce(getCompanies, 500);
  const {
    data: companies,
    loading,
    error,
  } = useFetch(debouncedGetCompanies(search, city, sort));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="mt-20 flex flex-col">
      <p className="text-gray-400 text-xs flex items-center justify-start">
        Result Found: {companies?.length}
      </p>

      <div className="flex flex-col gap-5">
        {companies &&
          companies?.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
      </div>
    </div>
  );
};

export default CompanyList;
