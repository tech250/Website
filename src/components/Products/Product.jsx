import { Link } from "react-router-dom";
const Product = ({ data }) => {
  return (
    <div
      className={`min-h-screen flex relative snap-start ${
        data.side == "left" ? "flex-row-reverse" : ""
      }`}
      id={data.productPageLink?.split("/")[1]}
    >
      <div
        className={`w-1/3 flex items-center justify-center`}
        style={{ backgroundColor: `${data.bgColor}` }}
      >
        <h2
          className={`text-[100px] font-bold text-transparent drop-shadow-[2px_2px_3px_black] bg-clip-text keyWord ${
            data.side == "left" ? "rotate-[90deg]" : "rotate-[270deg]"
          }`}
          style={{ backgroundColor: `${data.bgColor}` }}
        >
          {data.bgkeyword}
        </h2>
      </div>
      <div className="left-1/2 -translate-x-1/2 absolute custom-container grow top-1/2 -translate-y-1/2 flex gap-6 md:gap-8 lg:gap-12 flex-col md:flex-row  py-6 md:py-0 md:bg-transparent">
        <div
          className={`w-2/3  md:w-1/2 flex ${
            data.side == "left"
              ? "md:order-2 md:flex-row"
              : "md:order-1 md:flex-row-reverse self-end md:self-start"
          }`}
        >
          <img
            src={data.imgSrc}
            alt={data.imgAlt}
            className={`w-fit h-[250px] sm:w-1/2 md:w-[60%] sm:h-fit transition hover:scale-95 cursor-pointer drop-shadow-2xl drop-shadow-black `}
            height="550px"
            width="550px"
          />
        </div>
        <div
          className={`w-full md:w-1/2 flex flex-col gap-2 md:gap-4 ${
            data.side == "left" ? "order-1" : "order-2 items-end md:items-start"
          }`}
        >
          <div
            className={`${
              data.side == "left" ? "" : "w-2/3 md:w-full pl-2 md:pl-0"
            }`}
          >
            <h2
              className={`text-transparent w-fit bg-clip-text  drop-shadow-[1px_1px_1px_black] text-[30px] md:text-[50px] font-bold leading-none`}
              style={{ backgroundColor: `${data.bgColor}` }}
            >
              {data.name}
            </h2>
          </div>
          <p
            className={`text-black/60 md:text-black/50 text-sm md:text-base w-2/3 md:w-full ${
              data.side == "left" ? "" : "pl-2 md:pl-0"
            }`}
          >
            {data.pera}
          </p>
          <div
            className={`flex flex-col gap-2 md:gap-4 w-2/3 md:w-full ${
              data.side == "left" ? "" : "pl-2 md:pl-0"
            }`}
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-sm md:text-base font-semibold text-black/50">
                Available in:
              </h3>
              <div className="flex gap-2">
                {data.availableIn.map((quantity, id) => (
                  <span
                    key={id}
                    className="text-xs md:text-sm px-2 py-1 md:p-2 border border-[#ccc] rounded-md shadow-2xl bg-white"
                  >
                    {quantity}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2
                className="text-[30px] sm:text-[40px] md:text-[80px] font-bold text-transparent  drop-shadow-[1px_1px_1px_black] bg-clip-text leading-none"
                style={{ backgroundColor: `${data.bgColor}` }}
              >
                100 %
              </h2>
              <h3 className="text-base sm:text-lg md:text-xl">
                {data.productBenefit}
              </h3>
            </div>
            <Link
              className="border w-fit px-3 py-1 md:px-4 md:py-2 rounded-md shadow-[3px_3px_1px_black] hover:scale-95 transition"
              to={`/product${data.productPageLink}`}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
