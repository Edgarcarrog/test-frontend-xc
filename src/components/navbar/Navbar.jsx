import React from "react";
import Image from "next/image";
import SelectInput from "../selectInput/SelectInput";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../store/features/infoSlice";

const Navbar = () => {
  const info = useSelector((state) => state.info.info);
  const lang = useSelector((state) => state.info.language);
  const dispatch = useDispatch();
  if (lang && info) console.log(info[lang].navbar.menu.contact);

  return (
    <nav className="bg-gray1 h-[94px] font-sans">
      {info && (
        <div className="h-full flex justify-between max-w-[1800px] mx-auto">
          <div className="ml-[27px] h-fit self-center">
            <Image
              src={info[lang].navbar.logo}
              alt="logo"
              width={221}
              height={28}
            />
          </div>
          <ul className="w-[154px] mr-[39px] h-fit flex justify-between self-center text-base text-black font-sans uppercase">
            <li>
              <a href="#">{info[lang].navbar.menu.contact}</a>
            </li>
            <li>
              <p>・</p>
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
              <p>・</p>
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

export default Navbar;
