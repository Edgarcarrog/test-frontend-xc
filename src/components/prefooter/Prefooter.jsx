import React from "react";
import SocialIcon from "../socialIcon/SocialIcon";

const Prefooter = ({ data }) => {
  
  return (
    <div className="bg-gray8">
      <div className="grid grid-cols-12 gap-4 max-w-[1440px] mx-auto pb-[15px]">
        <div className="col-start-3 col-span-7 text-white mt-[24px]">
          <p className="h-[16px] leading-[0.875rem] text-[10px]">
            {data.contactCenter.title}
          </p>
          <p className="mb-[26px] text-gray6 text-[12px]">
            {data.contactCenter.email}
          </p>
          <div className="flex gap-[46px]">
            {data.numbers
              .filter((element) => {
                return element.main === true;
              })
              .map((element, index) => (
                <div key={index} className="text-[10px] text-gray6">
                  <p>{element.name}</p>
                  <p>{element.number}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="col-span-1 text-white mt-[24px] text-[10px]">
          <SocialIcon></SocialIcon>
          <SocialIcon></SocialIcon>
          <SocialIcon></SocialIcon>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
