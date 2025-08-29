import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const OneSlideSwiper = () => {
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
        <SwiperSlide>
          <div className="flex flex-col gap-6 text-center">
            <p className="text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              cumque laudantium in fugit blanditiis magnam tenetur repellendus
              error magni quidem itaque, ad eveniet ab autem est, laborum facere
              accusantium? At!
            </p>
            <div className="flex flex-col gap-4 w-fit mx-auto items-center">
              <img
                src="/"
                alt=""
                width="50px"
                height="50px"
                className="rounded-full"
              />
              <h3 className="text-sm font-bold">Mayank Behl</h3>
              <p className="text-xs font-bold text-black/50">
                With us Since <span className="text-black">3 Years</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-6 text-center">
            <p className="text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              cumque laudantium in fugit blanditiis magnam tenetur repellendus
              error magni quidem itaque, ad eveniet ab autem est, laborum facere
              accusantium? At!
            </p>
            <div className="flex flex-col gap-4 w-fit mx-auto items-center">
              <img
                src="/"
                alt=""
                width="50px"
                height="50px"
                className="rounded-full"
              />
              <h3 className="text-sm font-bold">Mayank Behl</h3>
              <p className="text-xs font-bold text-black/50">
                With us Since <span className="text-black">3 Years</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-6 text-center">
            <p className="text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              cumque laudantium in fugit blanditiis magnam tenetur repellendus
              error magni quidem itaque, ad eveniet ab autem est, laborum facere
              accusantium? At!
            </p>
            <div className="flex flex-col gap-4 w-fit mx-auto items-center">
              <img
                src="/"
                alt=""
                width="50px"
                height="50px"
                className="rounded-full"
              />
              <h3 className="text-sm font-bold">Mayank Behl</h3>
              <p className="text-xs font-bold text-black/50">
                With us Since <span className="text-black">3 Years</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OneSlideSwiper;
