import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-slate-100">
      <div className="custom-container py-4 md:py-6 flex flex-col gap-6">
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col gap-4">
            <img src="/d" alt="Vardaan Farms Logo" />
            <p className="text-black/80">
              Delivering fresh, pure, and natural dairy products directly from
              our farm to your home, every day with love and care.
            </p>
            <div className="flex gap-2">
              <div className="cursor-pointer px-2 py-1 bg-yellow-500 rounded-md shadow-[2px_2px_1px_black] hover:scale-95">
                <i className="fa-brands fa-facebook-f text-black/90"></i>
              </div>
              <div className="cursor-pointer px-2 py-1 bg-yellow-500 rounded-md shadow-[2px_2px_1px_black] hover:scale-95">
                <i className="fa-brands fa-square-instagram text-black/90"></i>
              </div>
              <div className="cursor-pointer px-2 py-1 bg-yellow-500 rounded-md shadow-[2px_2px_1px_black] hover:scale-95">
                <i className="fa-brands fa-youtube text-black/90"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h4 className="text-yellow-500 text-lg font-semibold drop-shadow-">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `flex items-center gap-2 ${
                    isActive ? "tex-black" : "text-black/50"
                  }`;
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) => {
                  return `flex items-center gap-2 ${
                    isActive ? "tex-black" : "text-black/50"
                  }`;
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => {
                  return `flex items-center gap-2 ${
                    isActive ? "tex-black" : "text-black/50"
                  }`;
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>Contact Us
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) => {
                  return `flex items-center gap-2 ${
                    isActive ? "tex-black" : "text-black/50"
                  }`;
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>Blogs
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-black/50 text-lg font-semibold">Contact Info</h4>
          </div>
        </div>
        <p className="text-center pt-6 border-t-1 border-black/40 text-black/50">&copy; 2025 Vardaan Farms | All rights Reserved | <NavLink to="/privacy-policy">Privacy Policy</NavLink> | <NavLink to="/terms-and-conditions">Terms & conditions</NavLink></p>
      </div>
    </div>
  );
};

export default Footer;
