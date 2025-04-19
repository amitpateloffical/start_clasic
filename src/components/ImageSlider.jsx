import React from "react";
import bg1 from "../assets/bglogo.webp";
import bg2 from "../assets/bg2.webp";
import bg3 from "../assets/bg3.webp";
import bg4 from "../assets/bg4.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";

const ImageSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={true}
        loop={true}
        speed={1000}
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {/* Swiper slides */}
        <SwiperSlide>
          <img src={bg1} alt="" className="w-full h-[80vh]  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg2} alt="" className="w-full h-[80vh] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg3} alt="" className="w-full h-[80vh] object-cover " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg4} alt="" className="w-full h-[80vh] object-cover " />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;
