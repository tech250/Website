import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import { Suspense, lazy } from "react";
import NavStrip from "./components/common/NavStrip";
import MoveUpArrow from "./components/common/MoveUpArrow";
import Whatsapp from "./components/common/Whatsapp";
const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const Products = lazy(() => import("./Pages/Products"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./Pages/TermsAndConditions"));
const SpecificProductPage = lazy(() => import("./Pages/SpecificProductPage"));

const App = () => {
  return (
    <div className="relative">
      <NavStrip />
      <Navbar />
      <Whatsapp />
      <ScrollToTop behaviour="smooth" />
      <div className="overflow-x-hidden">
        <Suspense fallback={<div className="min-h-screen"></div>}>
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
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
      <MoveUpArrow />
      <Footer />
    </div>
  );
};

export default App;
