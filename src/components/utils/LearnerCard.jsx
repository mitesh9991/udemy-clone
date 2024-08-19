import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { RiArrowRightSLine, RiArrowLeftSLine } from "@remixicon/react";

const LearnerCarousel = ({ learnerData }) => {
  const [activeLearner, setActiveLearner] = useState(learnerData[0].id);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleSlideChange = () => {
    if (swiperInstance) {
      const { activeIndex, slides } = swiperInstance;
      setShowPrevButton(activeIndex > 0);
      setShowNextButton(activeIndex < slides.length - 1);
    }
  };

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
    // Initialize the visibility of the navigation buttons
    handleSlideChange();
  };

  const goToNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <div className="relative w-full mt-12 mb-2 overflow-x-hidden">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={6}
        onSwiper={handleSwiperInit}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        onSlideChange={handleSlideChange}
        className="w-full"
      >
        {learnerData.map((data) => (
          <SwiperSlide
            key={data.id}
            className={`flex flex-col items-center justify-center p-2 px-4 rounded-full cursor-pointer ${
              activeLearner === data.id
                ? "bg-[#2d2f31]"
                : "bg-[#e4e8eb] hover:bg-[#d4d7da] text-black"
            }`}
            onClick={() => setActiveLearner(data.id)}
          >
            <h1
              className={`text-lg font-bold  ${
                activeLearner === data.id ? "text-white" : "text-black"
              }`}
            >
              {data.title}
            </h1>
            <h6
              className={`text-sm font-medium ${
                activeLearner === data.id ? "text-white" : "text-gray-600"
              }`}
            >
              {data.learners} learners
            </h6>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {showPrevButton && (
        <div
          className="carousel-button-prev absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-white shadow-2xl text-black p-2 rounded-full cursor-pointer hover:bg-gray-400"
          onClick={goToPrevSlide}
        >
          <RiArrowLeftSLine size={35} />
        </div>
      )}
      {showNextButton && (
        <div
          className="carousel-button-next absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-white shadow-2xl text-black p-2 rounded-full cursor-pointer hover:bg-gray-400"
          onClick={goToNextSlide}
        >
          <RiArrowRightSLine size={35} />
        </div>
      )}
    </div>
  );
};

export default LearnerCarousel;
