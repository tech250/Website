const HeroSectionSlide = () => {
  return (
    <div className="flex flex-col gap-6 w-full custom-container pb-6 md:pb-8 lg:pb-12">
      <h2
        className="text-center md:w-[500px] mx-auto text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[1px_1px_1px_black]
"
      >
        Lorem, ipsum dolor.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full justify-between">
        <div className="flex md:flex-col gap-4 md:gap-6 order-2 md:order-1">
          <div className="p-4 flex flex-col gap-2 md:gap-4 rounded-2xl text-center w-3/5 mx-auto bg-white border shadow-[3px_3px_1px_black]">
            <h2 className="text-2xl md:text-4xl font-bold">134+</h2>
            <p className="">Partners</p>
          </div>
          <div className="p-4 flex flex-col gap-2 md:gap-4 rounded-2xl text-center w-3/5 mx-auto bg-white border shadow-[3px_3px_1px_black]">
            <h2 className="text-2xl md:text-4xl font-bold">134+</h2>
            <p className="">Partners</p>
          </div>
        </div>
        <div className="md:order-2">
          <img
            src="/engage.webp"
            alt=""
            className="w-full md:w-[90%]  mx-auto rounded-2xl"
            height="500"
            width="445"
          />
        </div>
        <div className="self-center text-center md:max-w-[300px] flex flex-col gap-4 order-3">
          <p className="text-white/60">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            non!
          </p>
          <button className="px-6 md:px-4 py-2 rounded-lg w-fit mx-auto cursor-pointer bg-white border shadow-[3px_3px_1px_black] hover:scale-95 transition">
            Plan Smarter
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSlide;
