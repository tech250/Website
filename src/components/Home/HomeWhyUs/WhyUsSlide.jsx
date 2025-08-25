import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";

export default function WhyUsSlide({data , imgCss}) {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      spaceBetween={30}
      freeMode={true}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[FreeMode, Autoplay]}
      className="w-full"
    >
      {data.map((obj) => (
        <SwiperSlide key={obj.heading}>
          <div className="flex flex-col gap-6">
            <img src={obj.imgSrc} alt={obj.imgAlt} className={`${imgCss}`}/>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">{obj.heading}</h3>
              <p className="text-sm text-black/50">{obj.pera}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
