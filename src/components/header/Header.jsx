import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const info = useSelector((state) => state.info.info);

  return (
    <>
      <header className={`${styles.header} bg-gray3 box-border`}>
        {info ? (
          <>
            <div className="grid grid-cols-12 gap-4">
              <h1 className="col-start-4 col-span-7 mt-[148px] text-xxl text-black">
                {info.es.header.h1}
              </h1>
            </div>
            <div className="pb-[192px]">
              <div className="grid grid-cols-12 gap-4">
                <span className="col-start-4 col-span-2 self-center text-xxl text-black text-center">
                  {info.es.header.discount}
                </span>
                <div className="col-span-5">
                  {info.es.header.paragraphs.map((paragraph, index) => (
                    <div className="inline" key={index}>
                      <p className="text-xl text-gray7 inline">{paragraph}</p>
                      <span> </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </header>
    </>
  );
};

export default Header;
