import { productSlidesData } from "../../../PageData/HomePageData";
import Products from "../ProductsSection/Products";

const OurProducts = () => {
  return (
    <div className="">
      <div className="custom-container flex flex-col gap-6 md:gap-8">
        <h2 className="text-center text-4xl font-bold p-1 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit mx-auto">
          Our Products
        </h2>
        <div className="">
          <Products data={productSlidesData} />
        </div>
        <p className="text-black/50 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi et
          itaque harum eligendi, quibusdam ut odio quos corrupti omnis aliquid
          facilis, nulla magni laboriosam necessitatibus optio illum pariatur
          nemo natus minus qui voluptatem cum atque numquam! Repellendus
          assumenda sunt ad dolor, ducimus sequi eius asperiores ut, voluptas
          dicta unde modi pariatur recusandae nostrum tenetur corrupti iste
          tempora illum aspernatur. Corporis soluta eveniet fugit necessitatibus
          debitis itaque nulla dignissimos quam unde tempore deleniti animi
          voluptas dolore, pariatur repellat, accusamus doloremque autem,
          deserunt ipsam qui. Tempora, excepturi? Officiis exercitationem harum
          possimus iste illo labore cumque placeat commodi aliquam ducimus, et
          consequatur!
        </p>
      </div>
    </div>
  );
};

export default OurProducts;
