import Product from "../components/Products/Product";
import { productsData } from "../PageData/ProductsPageData";

const Products = () => {
  return (
    // <div className="h-screen overflow-y-scroll snap-y snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
    <div>
      {productsData.map((productData, id) => (
        <Product key={id} data={{ ...productData, side:`${id%2==0 ? "right" :"left"}` }} />
      ))}
    </div>
  );
};

export default Products;
