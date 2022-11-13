import React from "react";

const Prefooter = ({ data }) => {
  let newArray = null;
  return (
    <div className="bg-gray8 h-[200px]">
      <div className="grid grid-cols-12 gap-4 max-w-[1440px] mx-auto">
        <div className="col-start-3 col-span-6 text-white mt-[24px] text-[10px]">
          <p className="h-[16px] leading-[0.875rem]">
            {data.contactCenter.title}
          </p>
          <p>{data.contactCenter.email}</p>
          {data.numbers
            .filter((element) => {
              return element.main === true;
            })
            .map((element, index) => (
              <p key={index}>{element.name}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
