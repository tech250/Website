import { useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SwiperWithImagePreviewsAtBottom from "../common/SwiperWithImagePreviewsAtBottom";

const ProductHeroSection = ({ data }) => {
  const { name } = useParams();
  const plusIcon = useRef(null);
  const nutritionalTable = useRef(null);

  function openTable() {
    plusIcon.current.classList.remove("max-h-[80px]", "max-w-[80px]");
    plusIcon.current.classList.add("max-h-[0px]", "max-w-[0px]");
    nutritionalTable.current.classList.remove("max-h-[0px]");
    nutritionalTable.current.classList.add("max-h-[1000px]");
  }
  function closeTab() {
    plusIcon.current.classList.remove("max-h-[0px]", "max-w-[0px]");
    plusIcon.current.classList.add("max-h-[80px]", "max-w-[80px]");
    nutritionalTable.current.classList.remove("max-h-[1000px]");
    nutritionalTable.current.classList.add("max-h-[0px]");
  }
  return (
    <div className="custom-container flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 py-6 md:py-8 lg:py-12 items-center justify-between">
      <div className="w-full md:w-1/2 lg:w-[40%] 2xl:w-[35%] self-start aspect-square">
        <SwiperWithImagePreviewsAtBottom />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 self-center">
        {/* plus icom */}
        <img
          ref={plusIcon}
          src="/plus-gray.png"
          alt="plus icon"
          height="80px"
          width="80px"
          className="aspect-square transition-all cursor-pointer max-h-[80px] max-w-[80px] duration-1000 overflow-hidden"
          onClick={openTable}
        />
        {/* for nutritional profile */}
        <div
          className="w-full md:w-4/5 text-sm text-black/50 max-h-[0px] overflow-hidden transition-all duration-1000"
          ref={nutritionalTable}
        >
          <div className="border p-2 flex justify-between">
            <p>
              Nutritional Facts Per <span className="text-black">(100)</span>{" "}
              <span>{`${data.measurmentUnit}`}</span>
            </p>
            <i
              className="fa-solid fa-minus cursor-pointer"
              onClick={closeTab}
            ></i>
          </div>
          <div className=" flex flex-col gap-2 border p-2 border-t-0">
            {Object.keys(data.nutritionalFact).map((key, id) => (
              <div key={id} className="flex justify-between">
                <div>{key}</div>
                <div>{data.nutritionalFact[key]}</div>
              </div>
            ))}
          </div>
        </div>
        <h1 className={`text-2xl md:text-3xl lg:text-4xl font-semibold w-fit text-transparent bg-clip-text drop-shadow-[1px_1px_1px_black] bg-black/60`}>
          {data.heading}
        </h1>
        <p className="text-black/50">{data.info}</p>
        <div className="flex flex-col gap-2">
          <p>Size :-</p>
          <div className="flex">
            {data.availableIn.map((dat, id) => (
              <div
                key={id}
                className={`text-sm p-2 border ${id == 0 ? "" : "border-l-0"}`}
              >
                {dat}
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4">
          <Link
            to={`/products#${name}`}
            className="border border-black text-white bg-black px-4 py-3"
          >
            More Products
          </Link>
          <Link to="/contact-us" className="text-black px-4 py-3 border border-l-0">
            Lets Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductHeroSection;
