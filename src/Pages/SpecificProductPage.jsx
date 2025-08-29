import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { specificProductData } from "../PageData/SpecificProductPageData.js";
import ProductHeroSection from "../components/Product/ProductHeroSection.jsx";
import ProductTestimonials from "../components/Product/ProductTestimonials.jsx";

const SpecificProductPage = () => {
  const { name } = useParams();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    setPageData(specificProductData[`${name}`]);
  }, [pageData]);

  return pageData == null ? (
    ""
  ) : (
    <div className="layout-container">
      <ProductHeroSection data={pageData}/>
      <ProductTestimonials/>
    </div>
  );
};

export default SpecificProductPage;

