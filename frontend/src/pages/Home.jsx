import CompanyFilter from "../components/companies/CompanyFilter";
import CompanyList from "../components/companies/CompanyList";

const Home = () => {
  return (
    <div className="max-w-325">
      <CompanyFilter />

      <div className="border-b border-gray-300 mt-4 mb-10"></div>

      <CompanyList />
    </div>
  );
};

export default Home;
