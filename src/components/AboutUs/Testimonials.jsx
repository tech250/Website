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
          <h2 className="text-2xl md:text-3xl lg:text-4xl flex flex-col font-semibold">
            <span>Don't take our words for it! </span>
            <span>hear it from our Customers</span>
          </h2>
          <p className="text-black/50">We believe trust is earned, not claimed. That’s why our customers speak for us. Families, businesses, and daily buyers share their experiences of freshness, purity, and service that makes a difference. From morning milk deliveries to special dairy needs, we stay committed to quality that never compromises. Their words reflect our honesty, care, and promise to bring only the best to your table. Hear the stories that inspire us to keep growing every day.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
