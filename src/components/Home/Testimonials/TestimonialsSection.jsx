import RatingCard from "../../common/RatingCard";
import { testimonialCards } from "../../../PageData/HomePageData";

const TestimonialsSection = () => {
  return (
    <div className="">
      <div className="custom-container flex flex-col gap-6 cursor-pointer select-none">
        <h2 className="text-4xl font-bold p-1 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit mx-auto">
          Testimonials
        </h2>
        <p className="text-center text-black/50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos,
          quia molestias eius voluptate architecto doloremque porro voluptates
          cupiditate eligendi necessitatibus illo consequatur labore ea corporis
          sit quaerat aut quo quisquam iusto error. Non corporis quisquam
          ducimus delectus officia iste.
        </p>
        <div className="overflow-visible flex items-center justify-center">
          <div
            className={`grid grid-cols-3 w-fit mx-auto z-[1] mt-6`}
            style={{ perspective: "1000px" }}
          >
            {testimonialCards.map((obj, id) => (
              <RatingCard
                key={id}
                starcolor={obj.starcolor}
                name={obj.name}
                description={obj.description}
                designation={obj.designation}
                textcolor={obj.textcolor}
                bgColor={obj.bgColor}
                specificCss={obj.specificCss}
                lineColor={obj.lineColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
