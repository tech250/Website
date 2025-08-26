import WhyUsSlide from "../Home/HomeWhyUs/WhyUsSlide";
import { ourServicesCardaData } from "../../PageData/AboutUsPageData";
const OurBestVardaanServices = () => {
  return (
    <div className="p-6 bg-[url('/about-us-our-aproach-bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="custom-container flex flex-col gap-6">
        <h2 className="text-center text-2xl md:text-3xl  lg:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit mx-auto p-1">
          Our Best Vardaan Service
        </h2>
        <p className="text-center text-black/50">
          At Vardaan Farms, we bring high-quality grass-fed milk commercial
          straight from our ethically managed farms. With a focus on purity,
          sustainability, and freshness, our dairy products stand out in both
          taste and health benefits.
        </p>
        <div className="p-4 flex flex-col justify-end h-[270px] md:h-[350px] rounded-2xl relative z-[1]">
          <div className="inset-0 bg-black/10 absolute rounded-2xl"></div>
          <img
            src="/tape_top.png"
            alt="Tape Top"
            className="absolute w-fit h-fit top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex flex-col gap-2">
            <h4 className="flex items-center gap-2">
              <i className="fa-solid fa-star text-yellow-600"></i>OUR GOALS
            </h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              aliquid.
            </p>
          </div>
          <img
            src="/tape_down.png"
            alt=""
            className="absolute w-fit h-fit bottom-0 translate-y-1/2 right-0 translate-x-1/2"
          />
        </div>
        <div className="">
          <WhyUsSlide data={ourServicesCardaData} imgCss={"h-[150px] w-fit"}/>
        </div>
      </div>
    </div>
  );
};

export default OurBestVardaanServices;
