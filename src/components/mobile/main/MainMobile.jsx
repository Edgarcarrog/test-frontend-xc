import React from "react";
import Carousel from "../../carousel/Carousel";
import Image from "next/image";
import Button from "../../button/Button";
import Legals from "../../legals/Legals";
import { useSelector } from "react-redux";

const MainMobile = () => {
  const info = useSelector((state) => state.info.info);
  const lang = useSelector((state) => state.info.language);

  return (
    <main className="mt-[164px]">
      {info && (
        <>
          <section className="mx-auto">
            <div className="overflow-hidden w-[90%] mx-auto">
              <Carousel imagesArray={info[lang].carousel.desktop} />
            </div>
            <div className="mt-[51px]">
              <Image
                src={info[lang].promotions[0].logoPromo}
                alt="promo"
                width={65}
                height={96}
              />
              <div className="text-center w-[332px] mx-auto">
                <h2 className="mt-[20px] text-[20px] text-gray9 uppercase h-[43px]">
                  {info[lang].promotions[0].title}
                </h2>
              </div>
              <div className="w-[332px] mx-auto">
                <h3 className="mt-[20px] text-[20px] text-gray9">
                  {info[lang].promotions[0].Subtitle}
                </h3>
              </div>

              {info[lang].promotions[0].paragraphs.map((paragraph, index) => (
                <div key={index} className="w-[90%] mx-auto">
                  <p className="mt-[19px] text-[16px] text-gray7 leading-5">
                    {paragraph}
                  </p>
                </div>
              ))}
              <div className="w-max mt-[19px] mx-auto  text-[16px] ">
                <Button
                  text={info[lang].promotions[0].button.text}
                  tsize="20px"
                />
              </div>
            </div>
          </section>

          <section className="bg-gray2">
            <div className="grid grid-cols-12 gap-4 max-w-[1440px] mx-auto">
              <Legals data={info[lang].legals} />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default MainMobile;
