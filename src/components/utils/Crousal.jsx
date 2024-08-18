import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  RiArrowRightLine,
  RiArrowLeftLine,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "@remixicon/react";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <section className="relative w-full h-[450px] bg-gray-100" id="hero">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        speed={900}
        loop={true}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        className="hero-carousel__container w-full h-full"
      >
        <SwiperSlide className="relative flex items-center justify-center w-full h-full bg-gray-800 text-white">
          <img
            src="/Hero/hero-4.jpg"
            alt="Hero Slide 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-40 left-[19rem] w-[28rem] transform -translate-x-1/2 -translate-y-1/2  bg-white text-black py-4 px-6 shadow-lg">
            <h1 className="text-4xl font-bold mb-4">Learning that gets you</h1>
            <p className="text-lg mb-6">
              Skills for your present (and your future). Get started with us.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center w-full h-full  text-white">
          <img
            src="/Hero/hero-3.jpg"
            alt="Hero Slide 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-1/2 left-[19rem] w-[28rem] transform -translate-x-1/2 -translate-y-1/2  bg-white text-black py-4 px-6 shadow-lg">
            <h1 className="text-4xl font-bold mb-2">
              Skills that drive you forward
            </h1>
            <p className="text-lg mb-3">
              Technology and the world of work change fast — with us, you’re
              faster. Get the skills to achieve goals and stay competitive.
            </p>
            <button className="py-3 px-4 bg-zinc-800 text-white border border-black font-extrabold ">
              View Plans
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="button-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full shadow-lg cursor-pointer hover:bg-gray-700">
        <RiArrowRightSLine size={35} />
      </div>
      <div className="button-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full shadow-lg cursor-pointer hover:bg-gray-700">
        <RiArrowLeftSLine size={35} />
      </div>
    </section>
  );
};

export default HeroCarousel;
