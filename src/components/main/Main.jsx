import React from "react";
import Carousel from "../carousel/Carousel";
import Image from "next/image";
import Button from "../button/Button";
import Legals from "../legals/Legals";
import { useSelector } from "react-redux";

const Main = () => {
  const info = useSelector((state) => state.info.info);
  //if (info) console.log(info.es.legals);
  
  return (
    <main className="mt-[147px]">
      {info && (
        <>
          <section className="grid grid-cols-12 gap-4 max-w-[1440px] mb-[63px] mx-auto">
            <div className="col-start-2 col-span-6">
              <Carousel imagesArray={info.es.carousel.desktop} />
            </div>
            <div className="col-span-4 mt-[51px]">
              <Image
                src="https://via.placeholder.com/300x160" /* {info.es.promotions[0].logoPromo} */
                alt="promo"
                width={65}
                height={96}
              />
              <h2 className="mt-[32px] text-xl text-gray9 h-[43px]">
                {info.es.promotions[0].title}
              </h2>
              <p className="mt-[19px] text-lg text-gray7 leading-9">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                atque obcaecati natus odit fuga.
              </p>
              <p className="mt-[19px] text-md text-gray7 leading-9">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                atque obcaecati natus odit fuga.
              </p>
              <div className="w-max mt-[19px] mx-auto">
                <Button text={info.es.promotions[0].button.text} />
              </div>
            </div>
          </section>

          <section className="bg-gray2">
            <div className="grid grid-cols-12 gap-4 max-w-[1440px] mx-auto">
              <Legals data={info.es.legals} />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Main;
