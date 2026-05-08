import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Select from "../common/Select";
import { CiLocationOn } from "react-icons/ci";

const CompanyFilter = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-end justify-between">
      <div className="flex items-end gap-2">
        <div className="relative">
          <label className="text-xs text-gray-500 flex items-center justify-start">
            Select City
          </label>

          <input
            type="text"
            value="Indore, Madhya Pradesh, India"
            readOnly
            className="
              w-60
              text-xs
              border
              py-1
              px-2
              border-gray-300
              rounded-sm
              bg-white
              outline-none
            "
          />
          <CiLocationOn
            size={17}
            className="absolute right-1 top-7 -translate-y-1/2 text-purple-600"
          />
        </div>

        <Button className="bg-linear-to-br from-fuchsia-500 to-indigo-700 text-white font-semibold px-3 py-1.5">
          Find Company
        </Button>

        <Button
          className="bg-linear-to-br from-fuchsia-500 to-indigo-700 text-white font-semibold px-3 py-1.5"
          onClick={() => navigate("/add-company")}
        >
          + Add Company
        </Button>
      </div>

      <div>
        <label className="text-xs text-gray-500 flex items-center justify-start">
          Sort:
        </label>

        <Select />
      </div>
    </div>
  );
};

export default CompanyFilter;
