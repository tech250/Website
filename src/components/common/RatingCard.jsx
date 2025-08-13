const RatingCard = ({starcolor, description, name, designation, textcolor, bgColor}) => {
  return (
    <div className={`p-6 flex flex-col gap-4 w-[300px] rounded-2xl border ${textcolor} ${bgColor}`}>
      <div className={`flex gap-2 text-${starcolor}`}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className={`text-sm`}>
        {description}
      </p>
      <span className="h-[1px] w-1/2 bg-black"></span>
      <div className="flex gap-2 items-end">
        <img src="/d" alt="img" className="border rounded-lg" width="50" height="50"/>
        <div classNAme="flex flex-col gap-4">
          <h4 className="text-sm">{name}</h4>
          <h5 className="text-xs">{designation}</h5>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
