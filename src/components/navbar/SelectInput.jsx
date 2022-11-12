import React from "react";

const SelectInput = ({ options }) => {
  return (
    <select className="bg-transparent"
    /* className="form-select"
              id="grade"
              required
              name="grade"
              onChange={handleChange}
              value={dataForm.grade}
              autofocus */
    >
      {options.map((option, index) => {
        return (
          <option value={option} key={index}>
            {option.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
