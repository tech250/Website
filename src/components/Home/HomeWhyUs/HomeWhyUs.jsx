import { randomKeywordsObj, HomeWhyUsSlidesData } from "../../../PageData/HomePageData";
import KeywordsSlider from "./KeywordsSlider";
import WhyUsSlide from "./WhyUsSlide";

const HomeWhyUs = () => {
  return (
    <div className="w-full relative z-[1] overflow-hidden">
      <div className="inset-0 absolute z-[2]">
        <div className="rounded-full h-[200px] w-[200px] bg-black/10 duration-700 absolute right-0 translate-x-1/2 animate-pulse"></div>
        <div className="rounded-full h-[150px] w-[150px] bg-black/10 duration-700 absolute top-1/2 right-[300px] animate-pulse"></div>
        <div className="rounded-full h-[130px] w-[130px] bg-black/10 duration-700 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="rounded-full h-[50px] w-[50px] bg-black/10 duration-700 absolute top-0 -translate-y-1/2 right-[500px] animate-pulse"></div>
        <div className="rounded-full h-[80px] w-[80px] bg-black/10 duration-700 absolute right-[300px] animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 custom-container z-[3] py-6 md:py-8 lg:py-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit p-1">
            Why Vardaan Farms ?
          </h2>
          <p className="w-full md:w-[70%] text-black/50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            molestiae aspernatur quo nihil repellat iste esse eveniet libero,
            illum magnam quibusdam tempora eos, delectus possimus, iure
            reiciendis omnis facilis. Sequi, totam iure. Vitae at laboriosam,
            aliquid unde deleniti porro sit?
          </p>
        </div>
        <div className="z-[4]">
          <WhyUsSlide data={HomeWhyUsSlidesData}/>
        </div>
      </div>
      <KeywordsSlider data={randomKeywordsObj}/>
    </div>
  );
};

export default HomeWhyUs;
