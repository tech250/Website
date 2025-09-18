import FAQ from "./FAQ";
const FAQSection = ({data, imgLeftSide}) => {
  return (
    <div className="relative">
      <div className="custom-container flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
        <div className={`w-full md:w-1/2 ${imgLeftSide ? "md:order-1" : "md:order-2"}`}>
          <img src={data.img} alt="" className="w-full" loading="lazy"/>
        </div>
        <div className={`w-full md:w-1/2 flex flex-col gap-4 ${imgLeftSide ? "md:order-2" : "md:order-1"}`}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit p-1 px-4">
            Frequently Asked Questions
          </h2>
          <FAQ data={data.quesData} />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
