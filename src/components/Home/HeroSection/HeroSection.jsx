import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import HeroSectionSlide from "./HeroSectionSlide";

const HeroSection = () => {
  return (
    <div className="layout-container bg-center bg-[url(/home-hero-bg.jpg)]">
      <div className="bg-white/40 backdrop-blur-sm">
        <Swiper
          modules={[Autoplay]}
          className="custom-container !pt-6 cursor-grab"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          speed={1500}
        >
          <SwiperSlide className="w-full flex justify-center">
            <HeroSectionSlide />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSectionSlide />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSectionSlide />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;

// bg-gradient-to-br from-green-600 via-emerald-500 to-lime-400
