import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const info = useSelector((state) => state.info.info);
  console.log(info);
  return (
    <>
      <header className={`${styles.header} h-[522px] bg-darkGray`}>
        {info ? (
          <>
            <div>
              <h1 className="text-xxl">{info.es.header.h1}</h1>
            </div>
            <div className="flex justify-center content-center">
              <span className="text-xxl">{info.es.header.discount}</span>
              <div className="w-[581px]" >
                {info.es.header.paragraphs.map((paragraph, index) => (
                  <p className="text-xl inline" key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </header>
    </>
  );
};

export default Header;
