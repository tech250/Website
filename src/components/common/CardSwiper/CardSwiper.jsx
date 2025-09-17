import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";

export default function CardSwiper({ data }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay:2500,
          disableOnInteraction:true
        }}
        className="mySwiper w-[70%] md:w-4/5 xl:w-[70%] 2xl:w-1/2 h-fit"
      >
        {data.map((obj, id) => (
          <SwiperSlide key={id} className="rounded-2xl p-4 bg-white shadow-2xl">
            <div className="flex flex-col gap-4">
              <img
                src={obj.imgSrc}
                alt={obj.imgAlt}
                width="50px"
                height="50px"
                className="rounded-full aspect-square"
              />
              <p className="text-sm h-[200px] text-black/70">
                {obj.pera}
              </p>
              <div className="flex flex-col gap-1">
                <img
                  src={obj.signature}
                  alt={obj.signatureAlt}
                  className="w-2/5"
                />
                <p className="text-xs font-bold text-black/50">{obj.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
