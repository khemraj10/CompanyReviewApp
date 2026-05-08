import { useState } from "react";

const Input = ({
  type,
  name,
  value,
  handleChange,
  placeholder = "",
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
      {...props}
    />
  );
};

export default Input;
