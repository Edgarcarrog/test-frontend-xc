import React from "react";
import Image from "next/image";
import SelectInput from "../../selectInput/SelectInput";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../../store/features/infoSlice";

const NavbarMobile = () => {
  const info = useSelector((state) => state.info.info);
  const lang = useSelector((state) => state.info.language);
  const dispatch = useDispatch();
  if (lang && info) console.log(info[lang].navbar.menu.contact);

  return (
    <nav className="bg-white h-[48px]">
      {info && (
        <div className="h-full flex justify-between">
          <div className="ml-[8px] h-fit self-center">
            <Image
              src={info[lang].navbar.logo}
              alt="logo"
              width={87}
              height={20}
            />
          </div>
          <ul className="w-[120px] mt-[5px] mr-[13px] h-fit flex justify-between self-center text-xs text-black uppercase">
            <li>
              <a className="" href="#">
                {info[lang].navbar.menu.contact}
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer"
                onClick={() => dispatch(changeLanguage(lang))}
              >
                {info[lang].navbar.menu.lang.title}
              </a>
            </li>
            <li>
              <SelectInput options={info[lang].navbar.menu.currency} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
