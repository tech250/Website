const NavStrip = () => {
  return (
    <div className="hidden bg-black/80 md:block text-white/80 text-sm">
      <div className="custom-container flex justify-between">
        <div className="flex gap-4">
          <a
            href="mailto:hello@vardaanfarms.com"
            className="flex items-center gap-2 hover:scale-[102%] transition"
          >
            <img src="/envelope-solid-full-white.svg" alt="Envelope Icon" width="20px" height="20px"/>
            <p>hello@vardaanfarms.com</p>
          </a>
          <a
            href="tel:+918816000082"
            className="flex items-center gap-2 hover:scale-[102%] transition"
          >
            <img src="/phone-solid-full-white.svg" alt="Envelope Icon" width="20px" height="20px"/>
            <p>+91 8816000082</p>
          </a>
        </div>
        <div className="flex items-center">
          <a href="https://maps.app.goo.gl/bsPAvfkqSoWRbN7Y6" className="flex gap-2 items-center pr-4 border-r-2">
          <img src="/clock-solid-full.svg" alt="Clock Icon" width="20px" height="20px"/>
            <p>08:00 am - 6:00 pm</p>
          </a>
          <div className="flex gap-2 pl-4">
            <a href="https://www.facebook.com/vardaanfarms/" className="hover:scale-95 transition cursor-pointer">
              <img
                src="/facebook-logo-20px.png"
                alt="Facebook Logo"
                width="20"
                height="20"
              />
            </a>
            <a href="https://www.instagram.com/vardaanfarms/" className="hover:scale-95 transition cursor-pointer">
              <img
                src="/instagram-logo-20px.png"
                alt="Facebook Logo"
                width="20"
                height="20"
              />
            </a>
            <a href="https://www.youtube.com/@VardaanFarms" className="hover:scale-95 transition cursor-pointer">
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
