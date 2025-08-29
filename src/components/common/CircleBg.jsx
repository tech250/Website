const CircleBg = ({zindex}) => {
  return (
    <div className={`inset-0 absolute z-[${zindex}]`}>
      <div className="rounded-full h-[200px] w-[200px] bg-black/10 duration-700 absolute right-0 translate-x-1/2 animate-pulse"></div>
      <div className="rounded-full h-[150px] w-[150px] bg-black/10 duration-700 absolute top-1/2 right-[300px] animate-pulse"></div>
      <div className="rounded-full h-[130px] w-[130px] bg-black/10 duration-700 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="rounded-full h-[50px] w-[50px] bg-black/10 duration-700 absolute top-0 -translate-y-1/2 right-[500px] animate-pulse"></div>
      <div className="rounded-full h-[80px] w-[80px] bg-black/10 duration-700 absolute right-[300px] animate-pulse"></div>
    </div>
  );
};

export default CircleBg;
