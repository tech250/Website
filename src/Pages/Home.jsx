import Cta from "../components/common/CTA/Cta";
import FAQSection from "../components/common/Faq/FAQSection";
import HomeAboutUs from "../components/Home/AboutUsSection/HomeAboutUs";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import HomeWhyUs from "../components/Home/HomeWhyUs/HomeWhyUs";
import OurProcess from "../components/Home/OurProcess/OurProcess";
import OurProducts from "../components/Home/OurProducts/OurProducts";
import TestimonialsSection from "../components/Home/Testimonials/TestimonialsSection";
import { HeroSectionSlidesData } from "../PageData/HomePageData";

const Home = () => {
  return (
    <>
        <title>Vardaan Farms - Farm Fresh Best Organic Milk In Haryana</title>
        <meta
          name="description"
          content="At Vardaan Farms We Sell Fresh, Hight-Protein, Organic & Cultured Milk For Healthy Living, 100% Natural & Chemical-Free With Pure Love From Our Farms."
        />
        <meta
          property="og:title"
          content="Vardaan Farms - Farm Fresh Best Organic Milk In Haryana"
        />
        <meta
          property="og:description"
          content="At Vardaan Farms We Sell Fresh, Hight-Protein, Organic & Cultured Milk For Healthy Living, 100% Natural & Chemical-Free With Pure Love From Our Farms."
        />
        <meta
          property="og:image"
          content="/Our-farm.jpeg"
        />
        <meta property="og:url" content="https://www.vardaanfarms.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vardaan Farms - Farm Fresh Best Organic Milk In Gurgaon"
        />
        <meta
          name="twitter:description"
          content="Discover Vardaan Farms - blending tradition and modernity in dairy farming. Enjoy our sustainable, organic dairy products including milk, paneer, curd, and ghee."
        />
        <meta
          name="twitter:image"
          content="/Our-farm.jpeg"
        />
        <link rel="canonical" href="https://www.vardaanfarms.com/" />
        <meta
          name="keywords"
          content="high protein milk, fresh milk, best organic milk, cultured milk"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vardaan Farms",
            legalName: "Green Field Organic Farming",
            url: "https://vardaanfarms.com/",
            logo: "https://vardaanfarms.com/assets/Vardanlogo-D9SaybN8.png",
            image: [
              "https://vardaanfarms.com/assets/image1.jpg",
              "https://vardaanfarms.com/assets/gfoFarm-A0GGvSmi.png",
              "https://vardaanfarms.com/assets/clientCow2-BOVJgFh3.jpg",
            ],
            description:
              "Vardaan Farms is a premium dairy brand delivering fresh milk and dairy products in Gurgaon, Jhajjar, and Delhi.",
            foundingDate: "2018",
            foundingLocation: "Haryana, India",
            address: [
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Unit No.19, Ground Floor, DLF Star Tower, Sector 30, Gurugram",
                addressLocality: "Gurugram",
                addressRegion: "Haryana",
                postalCode: "122001",
                addressCountry: "IN",
                name: "Corporate Office",
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "28.46109",
                  longitude: "77.05293",
                },
              },
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Green Field Organic Farming, 5th Milestone, Gurugram Rd, Jhajjar, Haryana",
                addressLocality: "Jhajjar",
                addressRegion: "Haryana",
                postalCode: "124103",
                addressCountry: "IN",
                name: "Dairy Plant",
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "28.57444",
                  longitude: "76.68791",
                },
              },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "8816000082",
              contactType: "customer service",
              contactOption: "TollFree",
              email: "hello@vardaanfarms.com",
              availableLanguage: ["en", "Hindi"],
            },
            sameAs: [
              "https://www.facebook.com/vardaanfarms/",
              "https://www.instagram.com/vardaanfarms/",
              "https://www.youtube.com/@VardaanFarms",
            ],
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              minValue: 50,
              maxValue: 100,
            },
            parentOrganization: {
              "@type": "dairyFarm",
              name: "Green Field Organic Farming",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What makes Vardaan Farms’ milk the best organic milk?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vardaan Farms organic milk comes from grass-fed cows, free from artificial hormones and preservatives. It’s 100% natural, ensuring maximum nutrition and purity for your family.",
                },
              },
              {
                "@type": "Question",
                name: "Is Vardaan Farms fresh milk pasteurized?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Vardaan Farms milk is gently pasteurized to maintain safety while preserving its natural taste and nutrients—no preservatives, no chemicals, just pure dairy goodness.",
                },
              },
              {
                "@type": "Question",
                name: "Who should drink high-protein milk?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Their high-protein milk is ideal for athletes, gym-goers, growing children, and health-conscious individuals. It provides essential proteins & nutrients to support an active lifestyle.",
                },
              },
              {
                "@type": "Question",
                name: "What are the benefits of cultured milk?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "vardaan Farms cultured milk is rich in probiotics, which help with digestion, gut health, and immunity. It’s a great choice for anyone looking for a natural source of healthy bacteria.",
                },
              },
              {
                "@type": "Question",
                name: "Do Vardaan Farms offer bulk orders for businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Vardaan Farms is specialize in bulk dairy supply for retailers, distributors, and businesses.",
                },
              },
              {
                "@type": "Question",
                name: "What makes Vardaan Farms' ghee special?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vardaan Farms Ghee is traditionally made using pure farm-fresh milk, ensuring rich flavor and authentic quality. It’s free from artificial additives and preservatives.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I buy Vardaan Farms dairy products?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vardaan Farms dairy products are available through local distributors and retail partners across Gurgaon, Jhajjar, Dadri, and Delhi. Contact us to find a supplier near you!",
                },
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Vardaan Farms - Farm Fresh Best Organic Milk In Gurgaon",
            description:
              "At Vardaan Farms We Sell Fresh, Hight-Protein, Organic & Cultured Milk For Healthy Living, 100% Natural & Chemical-Free",
            image:
              "https://vardaanfarms.com/assets/ourFarmCowMilking-DkrKgpGU.jpg",
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
          })}
        </script>
      <div className="layout-container">
        <HeroSection data={HeroSectionSlidesData} />
        <HomeAboutUs />
        <HomeWhyUs />
        <OurProducts />
        <OurProcess />
        <TestimonialsSection />
        <FAQSection />
        <Cta />
      </div>
    </>
  );
};

export default Home;
