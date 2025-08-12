import HomeAboutUs from "../components/Home/AboutUsSection/HomeAboutUs";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import HomeWhyUs from "../components/Home/HomeWhyUs/HomeWhyUs";
import Products from "../components/Home/ProductsSection/Products";

const Home = () => {
  return (
    <div className="layout-container">
      <HeroSection />
      <HomeAboutUs/>
      <HomeWhyUs/>
      <Products/>
    </div>
  );
};

export default Home;
