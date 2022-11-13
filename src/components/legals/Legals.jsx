import React from "react";

const Legals = ({ data }) => {
  const description = <React.Fragment>{data}</React.Fragment>;
  return (
    <div className="col-start-2 col-span-9 mt-[37px] mb-[19px] text-base text-gray7">
      {description}
    </div>
  );
};

export default Legals;
