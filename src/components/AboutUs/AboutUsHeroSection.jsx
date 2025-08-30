import { Link } from "react-router-dom";
const AboutUsHeroSection = () => {
  return (
    <div className="py-6 md:py-8 lg:py-16">
      <div className="custom-container flex gap-6 md:gap-8 lg:gap-12 items-center flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-4 order-2 md:order-1">
          <h1 className="w-fit text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/80 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-black/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            aliquam molestiae non, eius velit consectetur ipsum molestias eaque
            quo qui id iure dolore repellat fugiat facilis quasi beatae, magnam
            nam.
          </p>
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-heart text-yellow-600"></i>
            <p className="text-black/50"><span className="text-black font-semibold">700 + new customers</span>{" "}in last 30 Days</p>
          </span>
          <Link
            className="px-4 py-2 border w-fit rounded-md shadow-[3px_3px_1px_black] cursor-pointer hover:scale-95 transition"
            to="/contact-us"
          >
            Get In Touch
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <img src="/buffalo-washing-pencil-sketch.png" alt="" className="" width="500px" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
