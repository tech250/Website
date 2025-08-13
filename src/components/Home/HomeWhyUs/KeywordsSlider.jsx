import KeywordSlide from "./KeywordSlide";

const KeywordsSlider = ({data}) => {
  return (
    <div className="flex flex-col gap-2 pinDiv">
     <KeywordSlide array={data.set1} cssProperties={"-translate-x-full"} endposition={"translateX(2%)"}/>
     <KeywordSlide array={data.set2} cssProperties={"translate-x-full"} endposition={"translateX(-3%)"}/>
     <KeywordSlide array={data.set3} cssProperties={"-translate-x-full"} endposition={"translateX(2%)"}/>
    </div>
  )
}

export default KeywordsSlider;