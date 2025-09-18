import "./RatingCard.css";
const RatingCard = ({
  description,
  name,
  designation,
  specificCss,
  imgSrc,
}) => {
  return (
    <div
      className={`p-4 sm:p-6 flex flex-col gap-6 sm:gap-4 w-[300px] rounded-2xl  ${specificCss} h-fit hover:scale-[101%] transition ratingCard bg-neutral-100 text-black/50 drop-shadow-[1px_1px_1px_black]`}
    >
      <div className={`flex gap-1 sm:gap-2 text-yellow-600`}>
        <img src="/star-solid-full.svg" alt="Star Icon Yellow" width="20px" height="20px"/>
        <img src="/star-solid-full.svg" alt="Star Icon Yellow" width="20px" height="20px"/>
        <img src="/star-solid-full.svg" alt="Star Icon Yellow" width="20px" height="20px"/>
        <img src="/star-solid-full.svg" alt="Star Icon Yellow" width="20px" height="20px"/>
        <img src="/star-solid-full.svg" alt="Star Icon Yellow" width="20px" height="20px"/>
      </div>
      <p className={`text-[13px] sm:text-sm`}>{description}</p>
      <span className={`h-[1px] w-1/2 bg-black/50`}></span>
      <div className="flex gap-2 items-center">
        <img
          src={imgSrc}
          alt="img"
          className="rounded-lg brightness-85"
          width="50"
          height="50"
          loading="lazy"
        />
        <div className="flex flex-col gap-0 justify-center">
          <h4 className="text-sm">{name}</h4>
          <h5 className="text-xs">{designation}</h5>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
