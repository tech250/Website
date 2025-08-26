import { testimonialData } from "../../PageData/AboutUsPageData";
import CardSwiper from "../common/CardSwiper/CardSwiper";

const Testimonials = () => {
  return (
    <div>
      <div className="custom-container flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <CardSwiper data={testimonialData}/>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2 order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl flex flex-col ">
            <span>Don't take our words for it! </span>
            <span>hear it from our partners</span>
          </h2>
          <p className="text-black/50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus cum sed facere reprehenderit veniam beatae, iure quia sequi. Dolorem illo delectus eligendi illum, quidem molestias doloremque magni totam, dolores ratione blanditiis quos atque neque animi! Doloremque molestiae reprehenderit ratione impedit earum animi porro hic veniam, dolores exercitationem mollitia culpa!</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
