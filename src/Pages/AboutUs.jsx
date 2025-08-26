import AboutUsHeroSection from "../components/AboutUs/AboutUsHeroSection";
import AboutUsSection from "../components/AboutUs/AboutUsSection";
import MissionAndVission from "../components/AboutUs/MissionAndVission";
import OurBestVardaanServices from "../components/AboutUs/OurBestVardaanServices";
import Testimonials from "../components/AboutUs/Testimonials";
import Cta from "../components/common/CTA/Cta";

const AboutUs = () => {
  return (
    <div className="layout-container">
      <AboutUsHeroSection />
      <AboutUsSection />
      <OurBestVardaanServices />
      <MissionAndVission/>
      <Testimonials/>
      <Cta />
    </div>
  );
};

export default AboutUs;
