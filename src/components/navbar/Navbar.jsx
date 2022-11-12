import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import SelectInput from "./SelectInput";
import { useSelector } from "react-redux";

const Navbar = () => {
  const info = useSelector((state) => state.info.info);

  const languages = ["es", "en"];
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <Image
          src="https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg"
          alt="logo"
          width={221}
          height={28}
        />
      </div>
      <ul className={`${styles.navbar__menu}`}>
        <li>
          <a href="https://google.com">Contacto</a>
        </li>
        <li>
          <SelectInput options={languages} />
        </li>
        {info ? (
          <li>
            <SelectInput options={info.es.navbar.menu.currency} />
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
