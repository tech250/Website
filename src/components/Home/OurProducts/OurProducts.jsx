import { productSlidesData } from "../../../PageData/HomePageData";
import Products from "../ProductsSection/Products";

const OurProducts = () => {
  return (
    <div className="relative bg-[url('/about-us-our-aproach-bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="custom-container flex flex-col gap-6 md:gap-8">
        <h2 className="text-center text-4xl font-bold px-4 p-1 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit mx-auto">
          Our Products
        </h2>
        <div className="">
          <Products data={productSlidesData} />
        </div>
        <p className="text-black/50 text-center">
          At Vardaan Farms, we believe good food starts with honesty. Every
          morning, our cows and buffaloes give us fresh, pure milk that carries
          the richness of desi tradition. From this natural base, we craft
          golden ghee, thick and creamy curd, and soft, fresh paneer—each
          product made without shortcuts or chemicals. Our process is simple,
          close to the roots, and focused on keeping nutrition and taste intact.
          Whether it’s the milk in your glass, the ghee in your rotis, or the
          paneer in your curries, we ensure you get farm-fresh goodness that
          connects you to the purity of village life.
        </p>
      </div>
    </div>
  );
};

export default OurProducts;
