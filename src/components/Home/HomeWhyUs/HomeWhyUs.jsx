import {
  randomKeywordsObj,
  HomeWhyUsSlidesData,
} from "../../../PageData/HomePageData";
import KeywordsSlider from "./KeywordsSlider";
import WhyUsSlide from "./WhyUsSlide";

const HomeWhyUs = () => {
  return (
    <div className="w-full relative z-[1] overflow-hidden">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 custom-container z-[3] py-6 md:py-8 lg:py-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit p-1 px-4">
            Why Vardaan Farms ?
          </h2>
          <p className="w-full md:w-[70%] text-black/50">
            <span className="text-black font-bold">
              Delivering organic integrity to everyone, everywhere.
            </span>{" "}
            We are committed to delivering organic integrity to everyone,
            everywhere. Our dairy products are pure, natural, and responsibly
            sourced, ensuring every home receives honest nutrition, trusted
            quality, and the goodness of nature in every drop.
          </p>
        </div>
        <div className="z-[4]">
          <WhyUsSlide data={HomeWhyUsSlidesData} />
        </div>
      </div>
      <KeywordsSlider data={randomKeywordsObj} />
    </div>
  );
};

export default HomeWhyUs;
