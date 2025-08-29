import OneSlideSwiper from "../common/OneSlideSwiper";

const ProductTestimonials = () => {
  return (
    <div className="custom-container border-t-1 border-slate-300 py-6 md:py-8 lg:py-12">
      <div className="w-full md:w-4/5 mx-auto flex flex-col gap-4 md:gap-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-black/70">What our customers say about us</h2>
        <OneSlideSwiper />
      </div>
    </div>
  );
};

export default ProductTestimonials;
