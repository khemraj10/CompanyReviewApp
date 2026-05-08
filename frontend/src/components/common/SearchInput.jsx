import { FiSearch } from "react-icons/fi";

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative w-64">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 text-xs rounded-md px-2 py-1 outline-none bg-white"
      />

      <FiSearch
        className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-600"
        size={17}
      />
    </div>
  );
};

export default SearchInput;
