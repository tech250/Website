const HomeAboutUs = () => {
  return (
    <div className="relative">
      <img
        src="/grass-pencil-sketch.png"
        alt=""
        className="absolute w-[50%] md:w-[30%] lg:w-[20%] bottom-0 translate-y-[8%]"
        loading="lazy"
      />
      <div className="flex flex-col gap-6 md:gap-12 md:flex-row custom-container">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img src="/cow-grasing-and-milking.jpeg" alt="Milk man Milking cow pencil Sketch" className="" loading="lazy"/>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 w-full md:w-1/2 justify-center order-1 md:order-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit p-1 px-4">
            ABOUT VARDAAN FARMS ?
          </h2>
          <p className="text-black/50">
            Farm-Fresh Dairy,{" "}
            <span className="text-black font-semibold">
              Trusted by Families & Businesses{" "}
            </span>
          </p>
          <p className="text-black/50">
            At Vardaan Farms, we bring you the best organic milk and fresh milk,
            sourced from healthy, grass-fed cows. With no preservatives or
            additives, our fresh milk retains its natural purity and
            nutrition—just as nature intended. Whether you're looking for a
            nutritious choice for your family or a reliable supplier for your
            business, we ensure quality in every drop. Our high-protein milk and
            cultured milk provide additional health benefits for all ages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
