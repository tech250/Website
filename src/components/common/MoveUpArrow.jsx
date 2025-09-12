import { useState, useEffect } from "react";

const MoveUpArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return isVisible ? (
    <div
      className="w-fit fixed right-[30px] sm:right-[80px] bottom-[20px] z-[35] text-2xl rounded-full text-black/40 py-2 px-2 cursor-pointer border border-black/40 bg-white/70"
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  ) : (
    ""
  );
};

export default MoveUpArrow;
