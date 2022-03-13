import React from "react";

const Button = ({ text, click }) => {
  const handleClick = () => {
    click();
  };

  return (
    <button
      className="bg-sky-600 px-4 py-2 text-white rounded"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
