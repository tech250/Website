import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const KeywordSlide = ({ array, cssProperties, endposition }) => {
  const slideRef = useRef(null);
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(slideRef.current, {
        transform: endposition,
        scrollTrigger: {
          trigger: document.querySelector(".pinDiv"),
          scrub: 1,
          end:"top 50%",
        },
      });
    },
    { scope: container }
  );

  return (
    <div className="overflow-x-hidden" ref={container}>
      <div className={`flex gap-4 no-wrap ${cssProperties}`} ref={slideRef}>
        {array.map((word, id) => (
          <span
            className={`text-xs md:text-sm px-6 py-1 border-3 border-green-600  rounded-full bg-black/70 text-white`}  
            key={id}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordSlide;
