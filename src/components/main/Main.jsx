import React from "react";
import Carousel from "../carousel/Carousel";
import Image from "next/image";
import Button from "../button/Button";
import Legals from "../legals/Legals";
import { useSelector } from "react-redux";

const Main = () => {
  const info = useSelector((state) => state.info.info);
  const lang = useSelector((state) => state.info.language);

  return (
    <main className="mt-[147px]">
      {info && (
        <>
          <section className="grid grid-cols-12 gap-4 max-w-[1800px] mb-[63px] mx-auto">
            <div className="col-start-2 col-span-6">
              <Carousel imagesArray={info[lang].carousel.desktop} />
            </div>
            <div className="relative col-span-4 mt-[51px]">
              <Image
                src={info[lang].promotions[0].logoPromo}
                alt="promo"
                width={65}
                height={96}
              />
              <h2 className="mt-[32px] text-xl text-gray9 h-[43px]">
                {info[lang].promotions[0].title}
              </h2>
              <p className="mt-[19px] text-lg text-gray7 leading-9">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                atque obcaecati natus odit fuga.
              </p>
              <p className="mt-[19px] text-md text-gray7 leading-9">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                atque obcaecati natus odit fuga.
              </p>
              <div className="w-[261px] h-[53px] mt-[50px] mx-auto">
                <Button text={info[lang].promotions[0].button.text} />
              </div>
            </div>
          </section>

          <section className="bg-gray2">
            <div className="grid grid-cols-12 gap-4 max-w-[1800px] mx-auto pt-[37px] pb-[19px] leading-5">
              <Legals data={info[lang].legals} />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Main;
