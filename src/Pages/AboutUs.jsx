import AboutUsHeroSection from "../components/AboutUs/AboutUsHeroSection";
import AboutUsSection from "../components/AboutUs/AboutUsSection";
import MissionAndVission from "../components/AboutUs/MissionAndVission";
import OurBestVardaanServices from "../components/AboutUs/OurBestVardaanServices";
import Testimonials from "../components/AboutUs/Testimonials";
import Cta from "../components/common/CTA/Cta";
import { Helmet } from "@vuer-ai/react-helmet-async";

const AboutUs = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes Vardaan Farms different from other dairy brands?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms focuses on natural, sustainable, and ethical dairy farming. Our cows graze freely, and we ensure fresh, high-quality dairy without artificial preservatives or hormones.",
        },
      },
      {
        "@type": "Question",
        name: "How does Vardaan Farms ensure the purity of its milk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We follow strict hygiene and safety protocols, from milking to packaging. Our advanced processing retains the milk’s natural nutrients while ensuring it meets the highest quality standards.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Vardaan Farms source its milk from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We produce milk from our own farms, where cows are raised in a natural, stress-free environment and fed a balanced diet, ensuring superior taste and nutrition.",
        },
      },
      {
        "@type": "Question",
        name: "Is Vardaan Farms milk suitable for children and elderly individuals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our milk is rich in essential vitamins and minerals, making it an excellent choice for all age groups, including children and seniors.",
        },
      },
      {
        "@type": "Question",
        name: "Does Vardaan Farms offer dairy products in bulk for businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we supply bulk dairy products to retailers, distributors, and businesses. Contact us for customized pricing and supply options.",
        },
      },
      {
        "@type": "Question",
        name: "How does Vardaan Farms practice sustainability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement eco-friendly farming techniques, responsible waste management, and water conservation to minimize our environmental impact while ensuring high-quality dairy production.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I buy Vardaan Farms dairy products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our dairy products are available through distributors and retail partners across Gurgaon, Jhajjar, Dadri, and Delhi. Contact us to find the nearest supplier!",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vardaan Farms - Ethical And Grass Fed Dairy Farming In India",
    description:
      "We Deliver Pure, high-quality Dairy Products From Grass-fed Cows That Freely Roam In Sunlight. Our Dairy Products are Natural, and Artificial Additives Free.",
    image: "https://vardaanfarms.com/assets/ourFarmCowMilking-DkrKgpGU.jpg",
    author: {
      "@type": "Person",
      name: "Mayank Behl",
    },
    publisher: {
      "@type": "Organization",
      name: "Vardaan Farms",
      logo: {
        "@type": "ImageObject",
        url: "https://vardaanfarms.com/assets/ourFarmCowMilking-DkrKgpGU.jpg",
      },
    },
    datePublished: "2025-09-13",
    dateModified: "2025-09-13",
  };

  return (
    <>
      <Helmet>
        <title>
          Vardaan Farms - Ethical And Grass Fed Dairy Farming In India
        </title>
        <meta
          name="description"
          content="We Deliver Pure, high-quality Dairy Products From Grass-fed Cows That Freely Roam In Sunlight. Our Dairy Products are Natural, and Artificial Additives Free."
        />
        <meta name="keywords" content="Grass Fed" />
        <meta
          property="og:title"
          content="Vardaan Farms - Ethical And Grass Fed Dairy Farming In India"
        />
        <meta
          property="og:description"
          content="We Deliver Pure, high-quality Dairy Products From Grass-fed Cows That Freely Roam In Sunlight. Our Dairy Products are Natural, and Artificial Additives Free."
        />
        <meta
          property="og:image"
          content="https://vardaanfarms.com/assets/ourVission-BnlmFmqI.jpg"
        />
        <meta property="og:url" content="https://vardaanfarms.com/about-us" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vardaan Farms - Ethical And Grass Fed Dairy Farming In India"
        />
        <meta
          name="twitter:description"
          content="We Deliver Pure, high-quality Dairy Products From Grass-fed Cows That Freely Roam In Sunlight. Our Dairy Products are Natural, and Artificial Additives Free."
        />
        <meta
          name="twitter:image"
          content="https://vardaanfarms.com/assets/ourVission-BnlmFmqI.jpg"
        />
        <link rel="canonical" href="https://www.vardaanfarms.com/about-us" />
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <div className="layout-container">
        <AboutUsHeroSection />
        <AboutUsSection />
        <OurBestVardaanServices />
        <MissionAndVission />
        <Testimonials />
        <Cta />
      </div>
    </>
  );
};

export default AboutUs;
