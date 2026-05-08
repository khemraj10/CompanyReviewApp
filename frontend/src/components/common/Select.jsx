const Select = ({ className = "" }) => {
  return (
    <select
      className={`
            border
            border-gray-300
            rounded-md
            bg-white
            text-black
            text-xs
            w-30
            p-1
            ${className}
          `}
    >
      <option>Name</option>
    </select>
  );
};

export default Select;
