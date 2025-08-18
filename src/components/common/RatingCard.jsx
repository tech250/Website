import "./RatingCard.css"
const RatingCard = ({starcolor, description, name, designation, textcolor, bgColor ,specificCss, lineColor}) => {
  return (
    <div className={`p-4 sm:p-6 flex flex-col gap-6 sm:gap-4 w-[300px] rounded-2xl ${textcolor} ${bgColor} ${specificCss} h-fit hover:scale-[101%] transition ratingCard`}>
      <div className={`flex gap-1 sm:gap-2 text-${starcolor}`}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className={`text-[13px] sm:text-sm`}>
        {description}
      </p>
      <span className={`h-[1px] w-1/2 bg-${lineColor}`}></span>
      <div className="flex gap-2 items-center">
        <img src="/d" alt="img" className="border rounded-lg" width="50" height="50"/>
        <div className="flex flex-col gap-0 justify-center">
          <h4 className="text-sm">{name}</h4>
          <h5 className="text-xs">{designation}</h5>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
