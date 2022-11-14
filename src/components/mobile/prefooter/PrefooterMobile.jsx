import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const PrefooterMobile = ({ data }) => {
  return (
    <div className="bg-gray8">
      <div className="flex justify-center gap-3 pt-[24px] text-white text-[10px]">
        <a className="text-[24px] text-white cursor-pointer">
          <FaFacebookF />
        </a>
        <a className="text-[24px] text-white cursor-pointer">
          <BsTwitter />
        </a>
        <a className="text-[24px] text-white cursor-pointer">
          <BsInstagram />
        </a>
      </div>
      <div className="w-[85%] mx-auto pb-[15px]">
        <div className="text-white mt-[24px]">
          <p className="h-[16px] leading-[0.875rem] text-[10px]">
            {data.contactCenter.title}
          </p>
          <p className="mb-[26px] text-gray6 text-[12px]">
            {data.contactCenter.email}
          </p>
          <div className="flex justify-between uppercase">
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
      </div>
    </div>
  );
};

export default PrefooterMobile;
