import React from "react";

const SelectInput = ({ options }) => {
  return (
    <select className="bg-transparent cursor-pointer">
      {options.map((option, index) => {
        return (
          <option
            className="hover:bg-tahiti text-tahiti"
            value={option}
            key={index}
          >
            {option.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
