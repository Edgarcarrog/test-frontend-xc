import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const info = useSelector((state) => state.info.info);
  console.log(info);
  return (
    <header className={styles.header}>
      {info ? (
        <>
          <h1>{info.es.header.h1}</h1>{" "}
          {info.es.header.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </>
      ) : null}
    </header>
  );
};

export default Header;
