import { FaStar } from "react-icons/fa";
import SearchInput from "../components/common/SearchInput";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-16 py-3 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-linear-to-r from-fuchsia-500 to-indigo-700 flex items-center justify-center">
          <FaStar size={16} className="text-white" />
        </div>
        <h1 className="flex items-center gap-0">
          <span className="text-gray-600">Review</span>
          <span className="text-purple-600">&</span>
          <span className="text-black font-bold">RATE</span>
        </h1>
      </div>
      <div className="flex items-center justify-end gap-5">
        <SearchInput placeholder="Search..." />

        <div className="flex items-center gap-3">
          <Button
            className="bg-white text-black"
            onClick={() => navigate("/register")}
          >
            SignUp
          </Button>
          <Button
            className="bg-white text-black"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
