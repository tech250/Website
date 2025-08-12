import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/autoplay";

const Products = () => {
  return (
    <div>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        loop={true}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2}
        speed={1200}
        preventClicks={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="custom-container border min-h-screen"
      >
        <SwiperSlide className="relative w-[200px] sm:w-[230px] md:w-[250px] lg:w-[300px] xl:w-[320px] aspect-[3/4] rounded-[14px] border border-[rgba(177,177,177,0.4)]">
          <img
            src="/cow-grasing-and-milking.png"
            alt=""
            className="w-full h-full rounded-[14px] object-cover select-none"
          />
          <div
            class="absolute bottom-[5px] left-1/2 -translate-x-1/2 text-center px-2 py-1 md:px-4 md:py-2 rounded-[8px] bg-[rgba(46,39,39,0.3)] border border-[rgba(177,177,177,0.4)] backdrop-blur-md"
            style={{ boxShadow: "0px 4px 30px rgba(0,0,0,0.2)" }}
          >
            <span className="text-xs">A2 Desi Cow Milk</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-[200px] sm:w-[230px] md:w-[250px] lg:w-[300px] xl:w-[320px] aspect-[3/4] rounded-[14px] border border-[rgba(177,177,177,0.4)]">
          <img
            src="/cow-grasing-and-milking.png"
            alt=""
            className="w-full h-full rounded-[14px] object-cover select-none"
          />
          <div
            class="absolute bottom-[5px] left-1/2 -translate-x-1/2 text-center px-2 py-1 md:px-4 md:py-2 rounded-[8px] bg-[rgba(46,39,39,0.3)] border border-[rgba(177,177,177,0.4)] backdrop-blur-md"
            style={{ boxShadow: "0px 4px 30px rgba(0,0,0,0.2)" }}
          >
            <span className="text-xs">A2 Desi Cow Milk</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-[200px] sm:w-[230px] md:w-[250px] lg:w-[300px] xl:w-[320px] aspect-[3/4] rounded-[14px] border border-[rgba(177,177,177,0.4)]">
          <img
            src="/cow-grasing-and-milking.png"
            alt=""
            className="w-full h-full rounded-[14px] object-cover select-none"
          />
          <div
            class="absolute bottom-[5px] left-1/2 -translate-x-1/2 text-center px-2 py-1 md:px-4 md:py-2 rounded-[8px] bg-[rgba(46,39,39,0.3)] border border-[rgba(177,177,177,0.4)] backdrop-blur-md"
            style={{ boxShadow: "0px 4px 30px rgba(0,0,0,0.2)" }}
          >
            <span className="text-xs">A2 Desi Cow Milk</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-[200px] sm:w-[230px] md:w-[250px] lg:w-[300px] xl:w-[320px] aspect-[3/4] rounded-[14px] border border-[rgba(177,177,177,0.4)]">
          <img
            src="/cow-grasing-and-milking.png"
            alt=""
            className="w-full h-full rounded-[14px] object-cover select-none"
          />
          <div
            class="absolute bottom-[5px] left-1/2 -translate-x-1/2 text-center px-2 py-1 md:px-4 md:py-2 rounded-[8px] bg-[rgba(46,39,39,0.3)] border border-[rgba(177,177,177,0.4)] backdrop-blur-md"
            style={{ boxShadow: "0px 4px 30px rgba(0,0,0,0.2)" }}
          >
            <span className="text-xs">A2 Desi Cow Milk</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-[200px] sm:w-[230px] md:w-[250px] lg:w-[300px] xl:w-[320px] aspect-[3/4] rounded-[14px] border border-[rgba(177,177,177,0.4)]">
          <img
            src="/cow-grasing-and-milking.png"
            alt=""
            className="w-full h-full rounded-[14px] object-cover select-none"
          />
          <div
            class="absolute bottom-[5px] left-1/2 -translate-x-1/2 text-center px-2 py-1 md:px-4 md:py-2 rounded-[8px] bg-[rgba(46,39,39,0.3)] border border-[rgba(177,177,177,0.4)] backdrop-blur-md"
            style={{ boxShadow: "0px 4px 30px rgba(0,0,0,0.2)" }}
          >
            <span className="text-xs">A2 Desi Cow Milk</span>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Products;
