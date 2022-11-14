import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="w-[261px] h-[53px] mt-[19px]text-black border-solid border border-black rounded">
        {text}
      </button>
    </div>
  );
};

export default Button;
