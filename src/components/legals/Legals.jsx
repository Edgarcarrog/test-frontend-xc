import React from "react";

const Legals = ({ data }) => {
  const description = <React.Fragment>{data}</React.Fragment>;
  return (
    <p className="col-start-2 col-span-9 text-base text-gray7">
      {description}
    </p>
  );
};

export default Legals;
