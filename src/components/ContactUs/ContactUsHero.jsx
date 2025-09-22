import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const ContactUsHero = () => {
  const imgBlackDiv = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imgBlackDiv.current,
      { width: "800px" },
      {
        width: "0px",
        scrollTrigger: {
          trigger: "body",
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="custom-container flex gap-6 md:gap-8 lg:gap-12 items-center flex-col md:flex-row">
        <div className="w-full md:w-2/5 flex flex-col gap-2 ">
          <h1 className="text-[80px] md:text-[70px] lg:text-[80px] font-bold leading-none text-black/80">
            Contact
          </h1>
          <p className="text-black/50">
            Need help finding the right solution for your needs? Contact us and
            let us guide you.
          </p>
          <span className="w-2/5 h-[2px] bg-black/80 rounded-full"></span>
        </div>
        <div className="w-full md:w-3/5 flex gap-6 md:gap-8 lg:gap-12">
          <div className="w-3/5 h-[400px] z-[1] relative overflow-hidden">
            <div
              ref={imgBlackDiv}
              className="h-full bg-slate-100/70 z-[3] absolute transition-all duration-1000 w-full "
            ></div>
            <div className="w-full h-full bg-[url('/cows-grazzing-and-looking-in-camera.webp')] bg-right sm:bg-center bg-cover bg-no-repeat"></div>
          </div>
          <div className="flex flex-col-reverse gap-6 w-2/5 pb-6">
            <div className="flex flex-col gap-1 md:gap-2">
              <h3 className="text-xl font-semibold">Social</h3>
              <div className="group w-fit text-sm">
                <a href="https://www.facebook.com/vardaanfarms/" className="flex gap-2 leading-none text-black/50 items-center">
                  <img src="/facebook-f-brands-solid-full.svg" alt="Facebook Logo" width="20px" height="20px"/>Facebook
                </a>
                <div className="max-w-[0px] h-[2px] bg-black/50 group-hover:max-w-[200px] transition-all duration-500"></div>
              </div>
              <div className="group w-fit text-sm">
                <a href="https://www.instagram.com/vardaanfarms/" className="flex items-center leading-none text-black/50 gap-2">
                <img src="/square-instagram-brands-solid-full.svg" alt="Instagram Logo" width="20px" height="20px"/>
                  Instagram
                </a>
                <div className="max-w-[0px] h-[2px] bg-black/50 group-hover:max-w-[200px] transition-all duration-500"></div>
              </div>
              <div className="group w-fit text-sm">
                <a href="https://www.youtube.com/@VardaanFarms" className="flex items-center leading-none text-black/50 gap-2">
                <img src="/youtube-brands-solid-full.svg" alt="Youtube Logo" width="20px" height="20px"/>
                  Youtube
                </a>
                <div className="max-w-[0px] h-[2px] bg-black/50 group-hover:max-w-[200px] transition-all duration-500"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <div className="group w-fit text-sm">
                <a href="mailto:hello@vardaanfarms.com" className="flex items-center gap-2 leading-none text-black/50">
                <img src="/envelope-solid-full.svg" alt="Enveloppe Logo" height="20px" width="20px"/>
                  hello@vardaanfarms.com
                </a>
                <div className="max-w-[0px] h-[2px] bg-black/50 group-hover:max-w-[200px] transition-all duration-500"></div>
              </div>
              <div className="group w-fit text-sm">
                <a href="tel:+918816000082" className="flex items-center gap-2 leading-none text-black/50">
                  <img src="/phone-solid-full.svg" alt="Phone Logo" height="20px" width="20px"/>
                  +91 8816000082
                </a>
                <div className="max-w-[0px] h-[2px] bg-black/50 group-hover:max-w-[200px] transition-all duration-500"></div>
              </div>
              <div className="group w-fit text-sm">
                <a href="https://maps.app.goo.gl/bsPAvfkqSoWRbN7Y6" className="flex items-center gap-2 leading-none text-black/50">
                <img src="/location-dot-solid-full.svg" alt="Location Logo" height="20px" width="20px"/>
                  Office No-19 Star Tower Sec 30 Gurugram, Jhajjar
                </a>
                <div className="max-w-[0px] h-[2px] bg-black/50 2xl:group-hover:max-w-[1000px] group-hover:max-w-[150px] transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHero;
