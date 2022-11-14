import { useSelector } from "react-redux";

const HeaderMobile = () => {
  const info = useSelector((state) => state.info.info);
  const lang = useSelector((state) => state.info.language);

  return (
    <>
      <header className="bg-gray3 box-border">
        {info && (
          <>
            <div className="grid">
              <h1 className="mt-[73px] text-xxl text-black text-center">
                {info[lang].header.h1}
              </h1>
            </div>
            <div className="mt-[40px]">
              <h3 className="text-xxl text-black text-center">
                {info[lang].header.discount}
              </h3>
            </div>
            <div className="mt-[37px] pb-[61px] m-auto w-[85%]">
              {info[lang].header.paragraphs.map((paragraph, index) => (
                <div className="inline" key={index}>
                  <p className="text-[20px] text-gray7 inline leading-9">
                    {paragraph}
                  </p>
                  <span> </span>
                </div>
              ))}
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default HeaderMobile;
