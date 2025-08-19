import { Link } from "react-router-dom";

const Product = ({data}) => {
  return (
    <div
      className={`min-h-screen flex relative ${
        data.side == "left" ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-1/3 flex items-center justify-center`}
        style={{ backgroundColor: `${data.bgColor}` }}
      >
        <h2
          className={`text-[100px] font-bold text-transparent drop-shadow-[1px_1px_1px_black] bg-clip-text ${
            data.side == "left" ? "rotate-[90deg]" : "rotate-[270deg]"
          }`}
          style={{backgroundColor:`${data.bgColor}`}}
        >
          {data.bgkeyword}
        </h2>
      </div>
      <div className="left-1/2 -translate-x-1/2 absolute custom-container grow top-1/2 -translate-y-1/2 flex gap-6 md:gap-8 lg:gap-12 flex-col md:flex-row bg-white/40 py-6 md:py-0 md:bg-transparent">
        <div
          className={`w-full md:w-1/2 ${
            data.side == "left" ? "order-2" : "order-1"
          }`}
        >
          <img src={data.imgSrc} alt={data.imgAlt} />
        </div>
        <div
          className={`w-full md:w-1/2 flex flex-col gap-2 md:gap-4 ${
            data.side == "left" ? "order-1" : "order-2"
          }`}
        >
          <h2 className="text-transparent w-fit bg-clip-text  drop-shadow-[1px_1px_1px_black] text-[50px] font-bold" style={{backgroundColor:`${data.bgColor}`}}>{data.name}</h2>
          <p className="text-black/50">{data.pera}</p>
          <div className="flex flex-col gap-2">
            <h3
              className="font-semibold text-black/50"
            >
              Available in:
            </h3>
            <div className="flex gap-2">
              {data.availableIn.map((quantity, id) => (
                <span
                  key={id}
                  className="text-sm p-2 border border-[#ccc] rounded-md shadow-2xl bg-white/50"
                >
                  {quantity}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2
              className=" text-[40px] md:text-[80px] font-bold text-transparent  drop-shadow-[1px_1px_1px_black] bg-clip-text"
              style={{ backgroundColor: `${data.bgColor}` }}
            >
              100 %
            </h2>
            <h3 className="text-xl">{data.productBenefit}</h3>
          </div>
          <Link
            className="border w-fit px-4 py-2 rounded-md shadow-[3px_3px_1px_black] hover:scale-95 transition"
            to={`/product/${data.productPageLink}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
