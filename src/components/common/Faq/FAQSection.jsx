import { faqData } from "../../Home/HomePageData";
import FAQ from "./FAQ";
const FAQSection = () => {
  return (
    <div>
      <div className="custom-container flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
        <div className="w-full md:w-1/2">
          <img src="/milking-cow-line-art.png" alt="" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit p-1">
            Frequently Asked Questions
          </h2>
          <FAQ data={faqData} />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
