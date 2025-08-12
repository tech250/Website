const HomeAboutUs = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12 md:flex-row custom-container">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <img src="/cow-grasing-and-milking.png" alt="" className="" />
      </div>
      <div className="flex flex-col gap-2 md:gap-4 w-full md:w-1/2 justify-center order-1 md:order-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit p-1">
          ABOUT VARDAAN FARMS ?
        </h2>
        <p className="text-black/50">
          {" "}
          Lorem ipsum dolor sit amet{" "}
          <span className="text-black font-semibold">consectetur</span>{" "}
          adipisicing elit. Vitae, error!
        </p>
        <p className="text-black/50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa
          officia incidunt qui non voluptatum adipisci numquam, itaque totam
          molestias in assumenda iusto sapiente sequi quidem odio quibusdam
          porro! Ducimus.
        </p>
        <p className="text-black/50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          expedita deserunt illum minus magni culpa saepe atque! Numquam dolor
          explicabo nulla veritatis laborum culpa assumenda?
        </p>
      </div>
    </div>
  );
};

export default HomeAboutUs;
