import { Helmet } from "@vuer-ai/react-helmet-async";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <>
    <Helmet>
      
    </Helmet>
      <div className="custom-container min-h-screen sm:min-h-auto flex justify-center items-center bg-[url('/about-us-our-aproach-bg.jpg')]">
        <div className="flex flex-col gap-6 py-6 md:py-8 items-center">
          <div className="aspect-square w-full md:w-4/5 lg:w-[50%] ">
            <img src="/hay-role-pencil-sketch.png" alt="" />
          </div>
          <p className="text-xl text-center text-black/50">
            We're building something awesome - stay tuned!
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text drop-shadow-[1px_1px_1px_black] w-fit text-center tracking-[8px] sm:tracking-[15px] bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500"
            style={{ wordSpacing: "15px" }}
          >
            COMING SOON
          </h1>
          <Link
            to="/"
            className="text-black/50 hover:text-black/80 underline  duration-700 transition"
          >
            Return Back To Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blogs;
