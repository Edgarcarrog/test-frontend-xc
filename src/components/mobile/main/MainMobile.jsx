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
              <div className="text-center w-[90%] mx-auto">
                <h2 className="mt-[20px] text-[20px] text-gray9 uppercase h-[42px] leading-[42px]">
                  {info[lang].promotions[0].title}
                </h2>
              </div>
              <div className="w-[88%] mx-auto">
                <h3 className="mt-[9px] text-[20px] text-gray9">
                  {info[lang].promotions[0].Subtitle}
                </h3>
              </div>

              {info[lang].promotions[0].paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="mt-[19px] pb-[20px] w-[90%] mx-auto"
                >
                  <p className="text-[16px] text-gray7 leading-5">
                    {paragraph}
                  </p>
                </div>
              ))}
              <div className="w-[90%] h-[42px] mt-[7px] mb-[30px] mx-auto  text-[16px] ">
                <Button
                  text={info[lang].promotions[0].button.text}
                  tsize="20px"
                />
              </div>
            </div>
          </section>

          <section className="bg-gray2">
            <div className="w-[90%] max-w-[1800px] mx-auto pt-[33px] pb-[17px]">
              <Legals data={info[lang].legals} />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default MainMobile;
