import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  function openSlide(name, index) {
    const slide = document.getElementById(`${name}${index}DataSlide`);
    slide.classList.remove("translate-y-full");
  }
  function closeSlide(name, index) {
    const slide = document.getElementById(`${name}${index}DataSlide`);
    slide.classList.add("translate-y-full");
  }
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        200: {
          slidesPerView: 1.1,
        },
        450: {
          slidesPerView: 1.5,
        },
        560: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.3,
        },
        1024: {
          slidesPerView: 2.5,
        },
        1164: {
          slidesPerView: 2.8,
        },
        1285: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3.3,
        },
      }}
      modules={[EffectCoverflow, Autoplay]}
      speed={1200}
      preventClicks={true}
      slidesPerView={"auto"}
      className="h-[435px]"
      touchReleaseOnEdges={true}
    >
      {data.map((obj, i) => (
        <SwiperSlide>
          <div className="relative w-[320px] aspect-[3/4] rounded-[14px] border border-[rgba(177,177,177,0.4)] overflow-hidden">
            <img
              src={obj.imgSrc}
              alt={obj.imgAlt}
              className="w-full h-full rounded-[14px] object-cover select-none bg-black/80"
            />
            <div
              className="absolute bottom-[5px] left-1/2 -translate-x-1/2 text-center px-2 py-1 md:px-4 md:py-2 rounded-[8px] bg-[rgba(46,39,39,0.3)] border border-[rgba(177,177,177,0.4)] backdrop-blur-md"
              id={`${obj.productName}${i}Div`}
              onMouseEnter={() => {
                openSlide(obj.productName, i);
              }}
            >
              <span className="text-xs">{obj.productName}</span>
            </div>
            <div
              id={`${obj.productName}${i}DataSlide`}
              className="p-4 flex flex-col gap-4 inset-0 bg-red-600/50 absolute rounded-[14px] translate-y-full transition w-[320px] aspect-[3/4] duration-1000"
              onMouseLeave={() => {
                closeSlide(obj.productName, i);
              }}
            >
              <h4 className="text-xl">{obj.productName}</h4>
              <p className="grow">{obj.productDescription}</p>
              <Link to={obj.productLink} className="w-full text-center bg-white py-2 rounded-[14px] shadow-[5px_5px_1px_black] hover:scale-95 transition text-sm">View Description</Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Products;
