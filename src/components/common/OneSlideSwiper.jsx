import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const OneSlideSwiper = ({ data }) => {
  return (
    <>
      <Swiper
        className="mySwiper w-full"
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        {data.map((obj) => (
          <SwiperSlide>
            <div className="flex flex-col gap-6 text-center">
              <p className="text-black/50">
                {obj.pera}
              </p>
              <div className="flex flex-col gap-4 w-fit mx-auto items-center">
                <img
                  src={obj.imgSrc}
                  alt="Random  Indian Person"
                  width="50px"
                  height="50px"
                  className="rounded-full"
                />
                <h3 className="text-sm font-bold">{obj.name}</h3>
                <p className="text-xs font-bold text-black/50">
                  With us Since <span className="text-black">{obj.time}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OneSlideSwiper;
