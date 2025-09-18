import { ourProcessData } from "../../../PageData/HomePageData";
import Process from "../../common/Process";
import { Link } from "react-router-dom";
const OurProcess = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-6 custom-container ">
        <h2 className="text-4xl font-bold p-1 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit">
          OurProcess
        </h2>
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 md:flex-row items-center">
          <div className="w-full md:-w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl">From Farm To Your Table</h3>
            <p className="text-black/50">
              From farm to your table, we keep milk as real as it should be. Our cows graze naturally, without stress, giving pure milk the traditional way. No shortcuts, no mixing — only natural goodness carried forward. Each drop reflects the bond between farmer and cattle, nurtured with care and honesty. When you make tea, set dahi, or prepare sweets, the taste stays fuller, richer, and more rooted in desi tradition. This is not just milk; it’s a promise of purity, a reminder of how real food connects families to their soil, culture, and health every single day.
            </p>
            <Link
              to="/contact-us"
              className="px-4 py-2 border w-fit rounded-md shadow-[3px_3px_1px_black] hover:scale-95 transition gap-2 flex items-center text-black/70"
            >
              <img src="/phone-solid-full.svg" alt="Phone Icon" width="20px" height="20px"/>
              Lets Connect
            </Link>
          </div>
          <div className="w-full md:-w-1/2">
            <Process data={ourProcessData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
