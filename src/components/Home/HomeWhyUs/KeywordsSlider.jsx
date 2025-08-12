import KeywordSlide from "./KeywordSlide";
import { randomKeywordsObj } from "./SlidesData";

const KeywordsSlider = () => {
  return (
    <div className="flex flex-col gap-2 pinDiv">
     <KeywordSlide array={randomKeywordsObj.set1} cssProperties={"-translate-x-full"} endposition={"translateX(2%)"}/>
     <KeywordSlide array={randomKeywordsObj.set2} cssProperties={"translate-x-full"} endposition={"translateX(-3%)"}/>
     <KeywordSlide array={randomKeywordsObj.set3} cssProperties={"-translate-x-full"} endposition={"translateX(2%)"}/>
    </div>
  )
}

export default KeywordsSlider;