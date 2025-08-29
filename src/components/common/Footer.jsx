import { NavLink } from "react-router-dom";
import CircleBg from "./CircleBg";
const Footer = () => {
  return (
    <div className="relative border-slate-200 overflow-hidden z-[1]">
      <CircleBg zindex={-1}/>
      <img src="/cow-eating-grass-pencil-sketch.png" alt="" className="absolute bottom-0 left-0 w-3/4 sm:w-[60%] md:w-[40%] lg:w-[20%] xl:w-[20%] z-[-2]"/>
      <div className="custom-container py-4 md:py-6 flex flex-col gap-6 z-[3]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-4">
            <img src="/d" alt="Vardaan Farms Logo" />
            <p className="text-black/50">
              Delivering fresh, pure, and natural dairy products directly from
              our farm to your home, every day with love and care.
            </p>
            <div className="flex gap-2">
              <a
                href=""
                className="group cursor-pointer px-2 py-1 rounded-md shadow-[2px_2px_1px_black] hover:scale-95 border border-black/50 hover:border-black transition duration-700"
              >
                <i className="fa-brands fa-facebook-f text-black/50 group-hover:text-black duration-700 transition"></i>
              </a>
              <a
                href=""
                className="group cursor-pointer px-2 py-1 rounded-md shadow-[2px_2px_1px_black] hover:scale-95 border border-black/50 hover:border-black transition duration-700"
              >
                <i className="fa-brands fa-square-instagram text-black/50 group-hover:text-black duration-700 transition"></i>
              </a>
              <a
                href=""
                className="group cursor-pointer px-2 py-1 rounded-md shadow-[2px_2px_1px_black] hover:scale-95 border border-black/50 hover:border-black transition duration-700"
              >
                <i className="fa-brands fa-youtube text-black/50 group-hover:text-black duration-700 transition"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-black/80 text-lg font-semibold">
              Contact Info
            </h4>
            <div className="flex flex-col grow justify-between gap-4">
              <a
                href=""
                className="flex gap-2 items-center text-black/50 hover:text-black transition duration-700"
              >
                <i className="fa-solid fa-location-dot"></i>
                <p className="text-sm">
                  Office No-19 Star Tower Sec 30 Gurugram Jhajjar
                </p>
              </a>
              <a
                href=""
                className="flex gap-2 items-center text-black/50 hover:text-black transition duration-700"
              >
                <i className="fa-solid fa-phone"></i>
                <p className="text-sm">(+91) 8816000082</p>
              </a>
              <a
                href=""
                className="flex gap-2 items-center text-black/50 hover:text-black transition duration-700"
              >
                <i className="fa-solid fa-location-dot"></i>
                <p className="text-sm">hello@vardaanfarms.com</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:items-center">
            <h4 className="text-black/80 text-lg font-semibold drop-shadow-">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `flex items-center gap-2 ${
                    isActive ? "text-black" : "text-black/50"
                  } hover:text-black transition duration-700`;
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) => {
                  return `flex items-center gap-2 ${
                    isActive ? "tex-black" : "text-black/50"
                  } hover:text-black transition duration-700`;
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>About Us
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) => {
                  return `flex items-center gap-2 ${
                    isActive ? "tex-black" : "text-black/50"
                  } hover:text-black transition duration-700`;
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>Our Products
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) => {
                  return `flex items-center gap-2 ${
                    isActive ? "tex-black" : "text-black/50"
                  } hover:text-black transition duration-700`;
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>Blogs
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <h2 className="font-semibold text-2xl text-black/70">
              VardaanFarms
            </h2>
            <p className="text-sm text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              repellendus nemo id rerum eius autem minima error quia officia
              beatae.
            </p>
          </div>
        </div>
        <p className="text-center pt-6 border-t-1 border-black/40  text-black/50">
          &copy; 2025 Vardaan Farms | All rights Reserved |{" "}
          <NavLink
            to="/privacy-policy"
            className={({ isActive }) => {
              return `${
                isActive ? "text-black" : "text-black/50"
              } hover:text-black transition duration-700`;
            }}
          >
            Privacy Policy
          </NavLink>{" "}
          |{" "}
          <NavLink
            to="/terms-and-conditions"
            className={({ isActive }) => {
              return `${
                isActive ? "text-black" : "text-black/50"
              } hover:text-black transition duration-700`;
            }}
          >
            Terms & conditions
          </NavLink>
        </p>
      </div>
      <img src="/footer-img.png" alt="" className="absolute top-0 md:top-auto bottom-0 right-0 w-3/4 sm:w-[60%] md:w-[40%] lg:w-[20%] xl:w-[15%] z-[-2]"/>
    </div>
  );
};

export default Footer;
