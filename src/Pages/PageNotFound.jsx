import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="bg-[url('/about-us-our-aproach-bg.jpg')] relative z-[1]">
      <div className="py-6 md:py-8 custom-container flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="bg-black/30 text-transparent text-[80px] font-bold bg-clip-text drop-shadow-[1px_1px_1px_black] leading-none">
            404
          </h1>
          <img
            src="/cow-eating-grass.gif"
            alt="Cow Eating Grass"
            width="400px"
          />
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-4xl text-black/80">Page Not Found !</h2>
            <p className="text-black/50 text-center">
              You have some patience, we will bring the course for you soon.
            </p>
            <Link
              to="/"
              className="px-6 py-2 bg-white border rounded-md  text-center w-fit shadow-[3px_3px_1px_black] hover:scale-95 transition"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
