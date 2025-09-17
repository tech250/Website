import ContactUsHero from "../components/ContactUs/ContactUsHero";
import MapAndForm from "../components/ContactUs/MapAndForm";
const ContactUs = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can i contact Vardaan Farms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can easily reach out to Vardaan Farms by calling us at +91 8816000082. We're happy to assist you with any queries about our dairy products and services!",
        },
      },
      {
        "@type": "Question",
        name: "What's the Official mail of Vardaan Farms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Official mail of Vardaan Farms is hello@vardaanfarms.com",
        },
      },
      {
        "@type": "Question",
        name: "Where is Vardaan Farms Office?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms office is located in Star Tower, Block A, Sector 30, Gurugram, Office No 19, You can also Checkout on Google maps.",
        },
      },
      {
        "@type": "Question",
        name: "Is Vardaan Farms office open on Sunday?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, but you can still visit their Manufacturing Plant (Green Field Organc farming) in Jhajjar, checkout on google maps.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Get in Touch with Vardaan Farms, Contact Us at (+91)881600082",
    description:
      "Have a Question or Need Fresh Dairy Products? We'd Love To Hear From You! Reach Out to Vardaan Farms via call, email, or Visit us for farm-fresh Goodness.",
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
    datePublished: "2025-03-26",
    dateModified: "2025-03-26",
  };

  return (
    <>
        <title>
          Get in Touch with Vardaan Farms, Contact Us at (+91)881600082
        </title>
        <meta
          name="description"
          content="Have a Question or Need Fresh Dairy Products? We'd Love To Hear From You! Reach Out to Vardaan Farms via call, email, or Visit us for farm-fresh Goodness."
        />
        <meta name="keywords" content="" />
        <meta name="author" content="Vardaan Farms" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Get in Touch with Vardaan Farms, Contact Us at (+91)881600082"
        /> 
        <meta
          property="og:description"
          content="Have a Question or Need Fresh Dairy Products? We'd Love To Hear From You! Reach Out to Vardaan Farms via call, email, or Visit us for farm-fresh Goodness."
        />
        <meta
          property="og:image"
          content=""
        />
        <meta
          property="og:url"
          content="https://www.vardaanfarms.com/contact-us"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Get in Touch with Vardaan Farms, Contact Us at (+91)881600082"
        />
        <meta
          name="twitter:description"
          content="Have a Question or Need Fresh Dairy Products? We'd Love To Hear From You! Reach Out to Vardaan Farms via call, email, or Visit us for farm-fresh Goodness."
        />
        <meta
          name="twitter:image"
          content=""
        />
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      <div className="layout-container pb-6 bg-[url('/crumbled-paper.png')] gap-6 md:gap-8">
        <ContactUsHero />
        <p className="custom-container text-black/50 text-center sm:text-lg">
          We’d love to hear from you! Whether you have a question about our
          products, need assistance, or just want to share your feedback, we're
          here to help. Reach out to us through any of the channels below, and
          we'll get back to you as soon as possible.
        </p>
        <MapAndForm />
      </div>
    </>
  );
};

export default ContactUs;
