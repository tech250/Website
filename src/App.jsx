import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Blogs from "./Pages/Blogs";
import Products from "./Pages/Products";
import PageNotFound from "./Pages/PageNotFound";
import NavStrip from "./components/common/NavStrip";
import Footer from "./components/common/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import SpecificProductPage from "./Pages/SpecificProductPage";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <>
      <NavStrip />
      <Navbar />
      <ScrollToTop behaviour="smooth" />
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:name" element={<SpecificProductPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
