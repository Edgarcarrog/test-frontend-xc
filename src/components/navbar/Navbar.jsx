import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import SelectInput from "../SelectInput";
import { useSelector } from "react-redux";

const Navbar = () => {
  const info = useSelector((state) => state.info.info);

  const languages = ["es", "en"];
  return (
    <nav className={`${styles.navbar} bg-mediumGray h-[94px]`}>
      <div className="h-full flex justify-between">
        <div className={`${styles.logo_container} ml-[27px] h-fit self-center`}>
          <Image
            src="https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg"
            alt="logo"
            width={221}
            height={28}
          />
        </div>
        <ul
          className={`${styles.navbar__menu} w-[154px] mr-[39px] h-fit flex justify-between self-center text-base`}
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
