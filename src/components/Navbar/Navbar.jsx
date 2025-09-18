import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const mobileNav = useRef(null);

  function toggleNav() {
    mobileNav.current.classList.remove("-translate-x-full");
  }

  function closeMobileNav() {
    mobileNav.current.classList.add("-translate-x-full");
  }

  return (
    <>
      <div className="sticky top-[0px] z-[1000] bg-white/40">
        <div className="backdrop-blur-md">
          <div className="custom-container flex justify-between items-center">
            <Link to="/" className="hover:scale-95 transition">
              <img
                src="/vardaan-farms-logo-pencil-sketch-dark.png"
                alt="Vardaan Farms Logo"
                className="h-[40px]"
              />
            </Link>
            <div className="hidden md:flex gap-3 md:gap-4">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `transition ${
                    isActive
                      ? "text-black/80 font-bold"
                      : "hover:scale-105 text-black/50"
                  }`;
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) => {
                  return `transition ${
                    isActive
                      ? "text-black/80 font-bold"
                      : "hover:scale-105 text-black/50"
                  }`;
                }}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => {
                  return `transition ${
                    isActive
                      ? "text-black/80 font-bold"
                      : "hover:scale-105 text-black/50"
                  }`;
                }}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) => {
                  return `transition ${
                    isActive
                      ? "text-black/80 font-bold"
                      : "hover:scale-105 text-black/50"
                  }`;
                }}
              >
                Our Products
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) => {
                  return `transition ${
                    isActive
                      ? "text-black/80 font-bold"
                      : "hover:scale-105 text-black/50"
                  }`;
                }}
              >
                Blogs
              </NavLink>
            </div>
            <Link
              to="/contact-us"
              className="hidden md:block px-4 py-2 rounded-md cursor-pointer hover:scale-95 transition shadow-[3px_3px_1px_black] border-1 hover:border-1"
            >
              Lets Connect
            </Link>
            <div className="block md:hidden">
              <i
                className="fa-solid fa-bars text-xl cursor-pointer"
                onClick={toggleNav}
              ></i>
            </div>
          </div>
        </div>
        {/* for mobile nav */}
        <div
          className="min-h-screen bg-white fixed top-0 overflow-y-auto min-w-[300px] max-w-[400px] w-4/5 transition -translate-x-full flex md:hidden border-r-1 border-[#ccc] p-4 flex-col gap-6"
          ref={mobileNav}
        >
          <i
            className="fa-solid fa-close h-fit text-xl cursor-pointer self-end hover:text-red-600"
            onClick={closeMobileNav}
          ></i>
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `p-2 border border-dashed rounded-md flex gap-2 items-center ${
                  isActive
                    ? "border-black/80 text-black/80"
                    : "text-black/50 border-black/50"
                }`;
              }}
              onClick={closeMobileNav}
            >
              <img src="/house-solid-full.svg" alt="House Icon" width="22px" height="22px"/>
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) => {
                return `p-2 border border-dashed rounded-md flex gap-2 items-center ${
                  isActive
                    ? "border-black/80 text-black/80"
                    : "text-black/50 border-black/50"
                }`;
              }}
              onClick={closeMobileNav}
            >
              <img src="/user-solid-full.svg" alt="User Icon" width="22px" height="22px"/>
              About
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => {
                return `p-2 border border-dashed rounded-md flex gap-2 items-center ${
                  isActive
                    ? "border-black/80 text-black/80"
                    : "text-black/50 border-black/50"
                }`;
              }}
              onClick={closeMobileNav}
            >
              <img src="/phone-solid-full-black.svg" alt="Phone Icon" width="22px" height="22px"/>
              Contact Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => {
                return `p-2 border border-dashed rounded-md flex gap-2 items-center ${
                  isActive
                    ? "border-black/80 text-black/80"
                    : "text-black/50 border-black/50"
                }`;
              }}
              onClick={closeMobileNav}
            >
              <img src="/cow-solid-full.svg" alt="Cow Icon" width="22px" height="22px"/>
              Our Products
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) => {
                return `p-2 border border-dashed rounded-md flex gap-2 items-center ${
                  isActive
                    ? "border-black/80 text-black/80"
                    : "text-black/50 border-black/50"
                }`;
              }}
              onClick={closeMobileNav}
            >
              <img src="/pen-nib-solid-full.svg" alt="Ink Pen Icon" width="22px" height="22px"/>
              Blogs
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
