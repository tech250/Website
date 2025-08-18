const FAQ = ({ data }) => {
  function questionClicked(id) {
    const allAnswers = document.querySelectorAll(".FaqAnswers");
    const allArrows = document.querySelectorAll(".arrow-down");
    allAnswers.forEach((ans) => {
      ans.classList.remove("max-h-[700px]");
      ans.classList.add("max-h-[0px]");
    });
    allArrows.forEach((arrow) => {
      arrow.classList.remove("rotate-[180deg]");
    });
    const ansToOPen = document.getElementById(`FaqAnswer-${id}`);
    const arrowToRotate = document.getElementById(`arrow-${id}`);
    ansToOPen.classList.remove("max-h-[0px]");
    ansToOPen.classList.add("max-h-[700px]");
    arrowToRotate.classList.add("rotate-[180deg]");
  }

  return (
    <div className="flex flex-col gap-4">
      {data.map((obj, id) => (
        <div
          className="flex flex-col gap-2 bg-slate-100 p-3 sm:p-4 rounded-lg cursor-pointer"
          key={id}
          id={`FaqQuestion-${id}`}
          onClick={() => {
            questionClicked(id);
          }}
        >
          <div className="flex gap-2 items-center justify-between">
            <h4 className="text-sm sm:text-base font-semibold text-black/60">{obj.ques}</h4>
            <i
              className={`fa-solid fa-chevron-down cursor-pointer transition arrow-down text-black/50 ${
                id == 0 ? "rotate-[180deg]" : ""
              }`}
              id={`arrow-${id}`}
            ></i>
          </div>
          <p
            className={`text-[13px] sm:text-sm text-black/50 overflow-y-hidden FaqAnswers transition-all duration-500 ease-in-out ${
              id == 0 ? "" : "max-h-[0px] overflow-hidden"
            }`}
            id={`FaqAnswer-${id}`}
          >
            {obj.ans}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
