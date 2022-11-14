import React from "react";

const Button = ({ text }) => {
  return (
    <button className="w-full h-full text-black border-solid border border-black rounded">
      {text}
    </button>
  );
};

export default Button;
