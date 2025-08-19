const Process = ({ data }) => {
  return (
    <div className="w-full">
      {data.map((obj, id) => (
        <div
          key={id}
          className={`relative border p-5 border-dashed rounded-sm items-center flex gap-4 ${
            id == data.length - 1 ? "border-b-1" : "border-b-0"
          } ${id % 2 == 0 ? "border-r-0" : " border-l-0 pl-12"}`}
        >
          <img src="/play-button-yellow.png" height="30px" width="30px" alt="" className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ${id%2==0? "rotate-[180deg]":""}`}/>
          <div className="h-full aspect-square">
            <img
              src={obj.imgSrc}
              alt={obj.imgAlt}
              className="aspect-square h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3>{obj.heading}</h3>
            <p className="text-sm text-black/50">{obj.pera}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Process;
