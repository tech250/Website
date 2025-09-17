import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { specificProductData } from "../PageData/SpecificProductPageData.js";
import ProductHeroSection from "../components/Product/ProductHeroSection.jsx";
import ProductTestimonials from "../components/Product/ProductTestimonials.jsx";

const SpecificProductPage = () => {
  console.log('rendered');
  const { name } = useParams();
  const [pageData, setPageData] = useState(null);
  
  console.log(pageData);
  
  useEffect(() => {
    if (specificProductData[`${name}`]) {
      setPageData(specificProductData[`${name}`]);
    } else {
      setPageData(undefined);
    }
  }, [name]);

  if (pageData === null) {
    return <div className="min-h-screen"></div>;
  }

  if (pageData === undefined) {
    return <Navigate to="/404" replace/>
  }

  return (
    <>
      <title>{pageData.seoData.title}</title>
      <meta name="description" content={pageData.seoData.description} />
      <meta name="keyword" content={pageData.seoData.keywords} />
      <meta property="og:title" content={pageData.seoData.og.title} />
      <meta
        property="og:description"
        content={pageData.seoData.og.description}
      />
      <meta property="og:image" content={pageData.seoData.og.image} />
      <meta property="og:url" content={pageData.seoData.og.url} />
      <meta name="twitter:card" content={pageData.seoData.twitter.card} />
      <meta name="twitter:title" content={pageData.seoData.twitter.title} />
      <meta
        name="twitter:description"
        content={pageData.seoData.twitter.description}
      />
      <meta name="twitter:image" content={pageData.seoData.twitter.image} />
      <link rel="canonical" href={pageData.seoData.canonical} />
      <div className="layout-container bg-[url('/about-us-our-aproach-bg.jpg')]">
        <ProductHeroSection data={pageData} />
        <ProductTestimonials data={pageData.testimonialData} />
      </div>
    </>
  );
};

export default SpecificProductPage;
