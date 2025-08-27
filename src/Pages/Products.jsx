import Product from "../components/Products/Product";
import { productsData } from "../PageData/ProductsPageData";

const Products = () => {
  return (
    <div>
      {productsData.map((productData, id) => (
        <Product key={id} data={{ ...productData, side:`${id%2==0 ? "right" :"left"}` }} />
      ))}
    </div>
  );
};

export default Products;
