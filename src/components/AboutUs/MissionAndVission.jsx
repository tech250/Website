const MissionAndVission = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="custom-container flex flex-col gap-6 md:gap-8 lg:gap-12 md:flex-row md:items-center">
        <div className="w-full md:w-1/2 relative z-[1] flex ">
          <div className="absolute aspect-square bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 -translate-y-[30px] -translate-x-[30px] z-[2] w-full md:w-4/5"></div>
          <img
            src=""
            alt="Our Mission Img"
            className="w-full md:w-4/5 aspect-square z-[3] border"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 relative">
          <i className="fa-solid fa-quote-left text-6xl absolute text-black/20 -translate-y-1/2 left-0"></i>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our Mission
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-black/50">
              At Vardaan Farms, our mission is to produce grass-fed milk
              commercial that prioritizes health, sustainability, and ethical
              farming. We ensure pure, nutrient-rich dairy by raising our cows
              in natural, stress-free environments, preserving both flavor and
              nutrition.
            </p>
            <p className="text-black/50">
              By bridging tradition and technology, we deliver uncompromised
              quality, making grass-fed milk commercial accessible to homes and
              businesses. Our goal is to create sustainable dairy solutions
              while maintaining the highest standards of excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="custom-container flex flex-col gap-6 md:gap-8 lg:gap-12 md:flex-row md:items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4 relative">
          <i className="fa-solid fa-quote-left text-6xl absolute text-black/20 -translate-y-1/2 left-0"></i>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our Vission
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-black/50">
              We strive to set new standards in grass-fed milk commercial,
              ensuring purity, sustainability, and premium quality. Our vision
              is to revolutionize dairy farming, making natural, grass-fed milk
              commercial a global benchmark.
            </p>
            <p className="text-black/50">
              With cutting-edge practices and transparency, we aim to educate
              consumers, build trust, and promote ethical dairy choices. Through
              continuous innovation and commitment, we envision a future where
              every home enjoys the healthiest, freshest dairy possible.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative z-[1] flex justify-end">
          <div className="absolute aspect-square bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 -translate-y-[30px] translate-x-[30px] z-[2] w-full md:w-4/5"></div>
          <img
            src=""
            alt="Our Mission Img"
            className="border w-full md:w-4/5 aspect-square z-[3]"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionAndVission;
