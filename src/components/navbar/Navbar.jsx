import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={`${styles.navbar__menu} font-bold`}>
        <li>Contacto</li>
        <li>En</li>
        <li>MXN</li>
      </ul>
    </nav>
  );
};

export default Navbar;
