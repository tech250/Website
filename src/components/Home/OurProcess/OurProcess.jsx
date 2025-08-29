import { ourProcessData } from "../../../PageData/HomePageData";
import Process from "../../common/Process";
import { Link } from "react-router-dom";
const OurProcess = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-6 custom-container ">
        <h2 className="text-4xl font-bold p-1 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit">
          OurProcess
        </h2>
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 md:flex-row items-center">
          <div className="w-full md:-w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl">From Farm To Your Table</h3>
            <p className="text-black/50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              rerum officiis, est molestias sapiente ab harum quibusdam magnam
              aut optio explicabo repellat perspiciatis placeat adipisci
              laboriosam! Cumque amet officia quas inventore repudiandae quos
              voluptatibus! Voluptates atque molestias sed. Nisi, voluptatum
              quas distinctio, illo repudiandae dolor tempore inventore unde
              molestias, ad nihil. Et repellendus ratione nesciunt accusantium
              nulla ipsa voluptatum atque, dolor debitis doloremque, maxime
              voluptates dignissimos, modi tempore? In cum unde debitis quasi,
              nam ea vero at minima quaerat dicta sequi corrupti et! Cum commodi
              necessitatibus, quia eum odit rerum, impedit nobis alias
              consequatur pariatur consequuntur ducimus ea vero sunt?
            </p>
            <Link
              to="/contact-us"
              className="px-4 py-2 border w-fit rounded-md shadow-[3px_3px_1px_black] hover:scale-95 transition gap-2 flex items-center"
            >
              <i className="fa-solid fa-phone"></i>
              Lets Connect
            </Link>
            <img src="" alt="" className="" />
          </div>
          <div className="w-full md:-w-1/2">
            <Process data={ourProcessData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
