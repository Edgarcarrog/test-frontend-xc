import Image from "next/image";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <Image
          src="https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg"
          alt="logo"
          width={221}
          height={28}
        />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
