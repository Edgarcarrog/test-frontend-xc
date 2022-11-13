import React from "react";
import Image from "next/image";
import SelectInput from "../selectInput/SelectInput";
import { useSelector } from "react-redux";

const Navbar = () => {
  const info = useSelector((state) => state.info.info);

  const languages = ["es", "en"];
  return (
    <nav className="bg-gray1 h-[94px]">
      {info && (
        <div className="h-full flex justify-between">
          <div className="ml-[27px] h-fit self-center">
            <Image
              src={info.es.navbar.logo}
              alt="logo"
              width={221}
              height={28}
            />
          </div>
          <ul className="w-[154px] mr-[39px] h-fit flex justify-between self-center text-base text-black uppercase">
            <li>
              <a href="#">{info.es.navbar.menu.contact}</a>
            </li>
            <li>
              <p>・</p>
            </li>
            <li>
              <a className="" href={info.es.navbar.menu.lang.href}>
                {info.es.navbar.menu.lang.title}
              </a>
            </li>
            <li>
              <p>・</p>
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

export default Navbar;
