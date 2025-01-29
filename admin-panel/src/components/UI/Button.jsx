import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
