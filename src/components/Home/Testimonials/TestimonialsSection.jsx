import React from "react";
import RatingCard from "../../common/RatingCard";

const TestimonialsSection = () => {
  return (
    <div>
      <div className="custom-container border flex flex-col gap-6">
        <h2 className="text-4xl font-bold p-1 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit">
          Testimonials
        </h2>
        <div className="">
          <RatingCard/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
