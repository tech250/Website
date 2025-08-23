import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { specificProductData } from "../PageData/SpecificProductPageData.js";

const SpecificProductPage = () => {
  const { name } = useParams();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    setPageData(specificProductData[`${name}`]);
  }, [pageData]);

  return pageData == null ? (
    ""
  ) : (
    <div
      className={`relative min-h-screen flex justify-center items-center z-[1]`}
      style={{ backgroundColor: `${pageData.bgColor}` }}
    >
      <div className="top-0 w-full  md:custom-container absolute">
        <div className="w-1/2 sm:w-2/5 rounded-2xl rounded-t-none h-[300px] sm:h-[400px] md:h-[500px] bg-transparent shadow-2xl z-[2]"></div>
      </div>
      <div className="py-6 custom-container flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 z-[3] leading-none">
        <div className="w-full md:w-1/2 flex md:flex-row-reverse">
          <img src={`/vardaanFarms-a2-desi-cow-milk-mockup.png`} alt={``} className="h-fit w-3/5 aspect-square" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <span
            className="text-2xl font-bold text-transparent w-fit bg-clip-text drop-shadow-[1px_1px_1px_black]"
            style={{ backgroundColor: `${pageData.textColor}` }}
          >
            {pageData.category}
          </span>
          <h1
            className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-transparent w-fit bg-clip-text  drop-shadow-[1px_1px_1px_black]"
            style={{ backgroundColor: `${pageData.textColor}` }}
          >
            {pageData.heading}
          </h1>
          <p
            className={`leading-normal`}
            style={{ color: `${pageData.textColor}` }}
          >
            {pageData.info}
          </p>
          <div
            id="nutrition-div"
            className={`p-2 w-4/5`}
            style={{
              color: `${pageData.nutritionTextColor}`,
              backgroundColor: `${pageData.nutritionbgColor}`,
            }}
          >
            <div className={`flex justify-between border-b-2 pb-2`}>
              <span>{`Nutritional Facts`}</span>
              <span>{`Per (100) ${pageData.measurmentUnit}`}</span>
            </div>
            <div className="flex flex-col gap-2 py-2">
              {Object.keys(pageData.nutritionalFact).map((key, id) => (
                <div key={id} className="flex justify-between gap-4">
                  <span>{key}</span>
                  <span>{pageData.nutritionalFact[key]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span
              style={{ backgroundColor: `${pageData.textColor}` }}
              className={`text-transparent w-fit bg-clip-text drop-shadow-[1px_1px_1px_black]`}
            >
              Available in:
            </span>
            <div className="flex gap-2">
              {pageData.availableIn?.map((size, id) => (
                <span
                  key={id}
                  className={`px-3 py-2 rounded-md border shadow-[3px_3px_black]`}
                  style={{
                    backgroundColor: `${pageData.nutritionbgColor}`,
                    color: `${pageData.nutritionTextColor}`,
                  }}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <>
      </>
    </div>
  );
};

export default SpecificProductPage;
