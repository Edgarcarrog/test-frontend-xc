import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import SelectInput from "../selectInput/SelectInput";
import { useSelector } from "react-redux";

const Navbar = () => {
  const info = useSelector((state) => state.info.info);

  const languages = ["es", "en"];
  return (
    <nav className={`${styles.navbar} bg-gray1 h-[94px]`}>
      <div className="h-full flex justify-between">
        <div className={`${styles.logo_container} ml-[27px] h-fit self-center`}>
          {info && (
            <Image
              src={info.es.navbar.logo}
              alt="logo"
              width={221}
              height={28}
            />
          )}
        </div>
        <ul
          className={`${styles.navbar__menu} w-[154px] mr-[39px] h-fit flex justify-between self-center text-base text-black`}
        >
          <li>
            <a href="https://google.com">CONTACTO</a>
          </li>
          <li>
            <p>・</p>
          </li>
          <li>
            <SelectInput options={languages} />
          </li>
          <li>
            <p>・</p>
          </li>
          {info ? (
            <li>
              <SelectInput options={info.es.navbar.menu.currency} />
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
