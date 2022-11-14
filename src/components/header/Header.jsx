import { useSelector } from "react-redux";

const Header = () => {
  const info = useSelector((state) => state.info.info);
  const lang = useSelector((state) => state.info.language);

  return (
    <>
      <header className="bg-gray3 box-border">
        {info && (
          <>
            <div className="grid grid-cols-12 gap-4">
              <h1 className="col-start-4 col-span-7 mt-[148px] text-xxxl text-black">
                {info[lang].header.h1}
              </h1>
            </div>
            <div className="pb-[192px]">
              <div className="grid grid-cols-12 gap-4">
                <span className="col-start-4 col-span-2 self-center text-xxxl text-black text-center">
                  {info[lang].header.discount}
                </span>
                <div className="col-span-5">
                  {info[lang].header.paragraphs.map((paragraph, index) => (
                    <div className="inline" key={index}>
                      <p className="text-xl text-gray7 inline leading-9">
                        {paragraph}
                      </p>
                      <span> </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
