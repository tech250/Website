import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
export default function SwiperWithImagePreviewsAtBottom({ data }) {
  return (
    <>
    <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={
          {
            delay:2500,
            disableOnInteraction:true
          }
        }
        loop={true}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="grayscale-50 bg-transparent"
      >
        {data.map((imgSrc, id) => (
          <SwiperSlide key={id} className="border border-black/5 rounded-md">
            <img src={imgSrc} alt="Vardaan Farms Products Image" className="rounded-md" loading={`${id==0? "eager":"lazy"}`}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
