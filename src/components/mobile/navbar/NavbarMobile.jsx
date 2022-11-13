import React from "react";
import Image from "next/image";
import SelectInput from "../../selectInput/SelectInput";
import { useSelector } from "react-redux";

const NavbarMobile = () => {
  const info = useSelector((state) => state.info.info);
  if (info) console.log(info.es.navbar.menu);
  const languages = ["es", "en"];
  return (
    <nav className="bg-white h-[48px]">
      {info && (
        <div className="h-full flex justify-between">
          <div className="ml-[8px] h-fit self-center">
            <Image
              src={info.es.navbar.logo}
              alt="logo"
              width={87}
              height={20}
            />
          </div>
          <ul className="w-[120px] mt-[5px] mr-[13px] h-fit flex justify-between self-center text-xs text-black uppercase">
            <li>
              <a className="" href="#">
                {info.es.navbar.menu.contact}
              </a>
            </li>
            <li>
              <a className="" href={info.es.navbar.menu.lang.href}>
                {info.es.navbar.menu.lang.title}
              </a>
            </li>
            <li>
              <SelectInput options={info.es.navbar.menu.currency} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
