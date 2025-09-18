import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function SwiperWithImagePreviewsAtBottom({ data }) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {data.map((imgSrc, id) => (
          <SwiperSlide key={id}>
            <img src={imgSrc} alt="Vardaan Farms Products Image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
