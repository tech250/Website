import Cta from "../components/common/CTA/Cta";
import FAQSection from "../components/common/Faq/FAQSection";
import Footer from "../components/common/Footer";
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
      <HomeAboutUs />
      <HomeWhyUs />
      <OurProducts />
      {/* <OurProcess/> */}
      <TestimonialsSection />
      <FAQSection />
      <Cta/>
      <Footer/>
    </div>
  );
};

export default Home;
