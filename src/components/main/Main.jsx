import React from "react";
import Carousel from "../carousel/Carousel";

const Main = () => {
  return (
    <main>
      <section className="bg-midnight text-tahiti">Hotel Xcaret México</section>
      <section>
        <Carousel />
      </section>
      <section>La Casa de la Playa</section>
    </main>
  );
};

export default Main;
