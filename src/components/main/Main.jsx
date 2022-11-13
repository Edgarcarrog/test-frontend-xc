import React from "react";
import Carousel from "../carousel/Carousel";
import { useSelector } from "react-redux";

const Main = () => {
  const info = useSelector((state) => state.info.info);
  // if (info) console.log(info.es.carousel.desktop);
  return (
    <main>
      <section className="grid grid-cols-12 gap-4 max-w-[1440px]">
        <div className="col-start-2 col-span-6">
          {info && <Carousel imagesArray={info.es.carousel.desktop} />}
        </div>
      </section>
      <section></section>
      <section>La Casa de la Playa</section>
    </main>
  );
};

export default Main;
