import HomeAboutUs from "../components/Home/AboutUsSection/HomeAboutUs";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import HomeWhyUs from "../components/Home/HomeWhyUs/HomeWhyUs";
import OurProcess from "../components/Home/OurProcess/OurProcess";
import OurProducts from "../components/Home/OurProducts/OurProducts";
import TestimonialsSection from "../components/Home/Testimonials/TestimonialsSection";

const Home = () => {
  return (
    <div className="layout-container">
      <HeroSection />
      <HomeAboutUs/>
      <HomeWhyUs/>
      <OurProducts/>
      {/* <OurProcess/> */}
      <TestimonialsSection/>
      <div className="min-h-screen">
      </div>
    </div>
  );
};

export default Home;
