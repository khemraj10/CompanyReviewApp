import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        px-2
        py-1
        rounded-md
        hover:opacity-90
        transition
        cursor-pointer
        text-xs
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
