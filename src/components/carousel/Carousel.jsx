import Image from "next/image";
import React from "react";

const Carousel = ({ imagesArray }) => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="bg-gray3 carousel-inner relative w-full overflow-hidden">
        {imagesArray.map((image, index) => {
          // console.log(image.src);
          if (index === 0) {
            return (
              <div
                key={index}
                className="carousel-item active relative float-left w-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={709}
                  height={592}
                />
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="carousel-item relative float-left w-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={709}
                  height={592}
                />
              </div>
            );
          }
        })}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="text-gray11 visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
