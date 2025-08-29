import React from "react";

const NavStrip = () => {
  return (
    <div className="hidden bg-black/80 md:block text-white/80 text-sm">
      <div className="custom-container flex justify-between">
        <div className="flex gap-4">
          <a
            href=""
            className="flex items-center gap-2 hover:scale-[102%] transition"
          >
            <i className="fa-solid fa-envelope text-white/80"></i>
            <p>hello@vardaanfarms.com</p>
          </a>
          <a
            href=""
            className="flex items-center gap-2 hover:scale-[102%] transition"
          >
            <i className="fa-solid fa-phone text-white/80"></i>
            <p>+91 8816000082</p>
          </a>
        </div>
        <div className="flex items-center">
          <a href="" className="flex gap-2 items-center pr-4 border-r-2">
            <i className="fa-solid fa-clock text-white/80"></i>
            <p>08:00 am - 6:00 pm</p>
          </a>
          <div className="flex gap-2 pl-4">
            <a href="" className="hover:scale-95 transition cursor-pointer">
              <img
                src="/facebook-logo-20px.png"
                alt="Facebook Logo"
                width="20"
                height="20"
              />
            </a>
            <a href="" className="hover:scale-95 transition cursor-pointer">
              <img
                src="/instagram-logo-20px.png"
                alt="Facebook Logo"
                width="20"
                height="20"
              />
            </a>
            <a href="" className="hover:scale-95 transition cursor-pointer">
              <img
                src="/youtube-logo-20px.png"
                alt="Facebook Logo"
                width="20"
                height="20"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavStrip;
