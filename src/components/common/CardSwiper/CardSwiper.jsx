import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

export default function CardSwiper({ data }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[70%] md:w-4/5 xl:w-[70%] 2xl:w-1/2 h-fit"
      >
        {data.map((obj, id) => (
          <SwiperSlide key={id} className="rounded-2xl bg-black/10 p-4 flex flex-col  gap-6">
            <img
              src={obj.imgSrc}
              alt={obj.imgAlt}
              width="50px"
              height="50px"
              className="rounded-full"
            />
            <p className="text-sm h-[250px]">
             {obj.pera}
            </p>
            <img src={data.signature} alt={obj.signatureAlt} />
            <p className="text-xs">{obj.designation}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
