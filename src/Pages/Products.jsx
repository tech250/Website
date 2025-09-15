import Product from "../components/Products/Product";
import { productsData } from "../PageData/ProductsPageData";

const Products = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Our Products",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "A2 Desi Cow Milk",
        url: "https://vardaanfarms.com/product/a2-desi-cow-milk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Full Cream Milk",
        url: "https://vardaanfarms.com/product/full-cream",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Toned Milk",
        url: "https://vardaanfarms.com/product/toned-milk",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Double Toned Milk",
        url: "https://vardaanfarms.com/product/double-toned-milk",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Natural Cow Milk",
        url: "https://vardaanfarms.com/product/natural-cow-milk",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Buffalo Milk",
        url: "https://vardaanfarms.com/product/buffalo-milk",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Family Pack",
        url: "https://vardaanfarms.com/product/family-pack",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Butter Milk",
        url: "https://vardaanfarms.com/product/butter-milk",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Chach Masala",
        url: "https://vardaanfarms.com/product/masala-chach",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Slim Curd",
        url: "https://vardaanfarms.com/product/slim-curd",
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "Curd",
        url: "https://vardaanfarms.com/product/curd",
      },
      {
        "@type": "ListItem",
        position: 12,
        name: "A2 Desi Cow Ghee",
        url: "https://vardaanfarms.com/product/a2-desi-cow-ghee",
      },
      {
        "@type": "ListItem",
        position: 13,
        name: "Buffalo Ghee",
        url: "https://vardaanfarms.com/product/buffalo-ghee",
      },
    ],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What dairy products are available on Vardaan Farms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms offer a wide range of premium dairy products, including A2 Desi Cow Milk, Buffalo Milk, Full Cream Milk, Paneer, Ghee, and more, all sourced from our ethical farms.",
        },
      },
      {
        "@type": "Question",
        name: "Is Vardaan Farms ghee made using the traditional Bilona method?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Vardaan Farms A2 Desi Cow Ghee is prepared using the Bilona method, ensuring superior taste, aroma, and nutritional value.",
        },
      },
      {
        "@type": "Question",
        name: "How is Vardaan Farms paneer different from store-bought paneer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms farm-fresh paneer is made without preservatives, ensuring better taste, texture, and higher protein content compared to mass-produced options.",
        },
      },
      {
        "@type": "Question",
        name: "Do you use any preservatives in your dairy products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, all Vardaan Farms dairy products are 100% natural, free from artificial preservatives, chemicals, and additives.",
        },
      },
      {
        "@type": "Question",
        name: "Do Vardaan Farms offer lactose-free or plant-based alternatives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Currently, Vardaan Farms specialize in fresh dairy products",
        },
      },
      {
        "@type": "Question",
        name: "Are your dairy products suitable for children and elderly individuals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Vardaan Farms dairy products are rich in essential vitamins, calcium, and proteins, making them ideal for all age groups.",
        },
      },
      {
        "@type": "Question",
        name: "How do I place an order for bulk dairy products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms offer bulk purchasing for businesses, hotels, and retailers. You can contact through whatsapp or e-mail",
        },
      },
      {
        "@type": "Question",
        name: "What makes Vardaan Farms’ dairy products better than store-bought alternatives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms dairy products are Fresh & organic, Preservative-free, Nutrient-rich, Ethically sourced from happy, healthy animals",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Fresh, 100% Natural and Chemical Free Dairy products",
    description:
      "Explore our range of 100% pure and fresh dairy products, including A2 Desi Cow Milk, Buffalo Milk, Curd, and more. No preservatives, farm-fresh quality with pure Love.",
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
        <title>Best Fresh, 100% Natural and Chemical Free Dairy products</title>
        <meta
          name="description"
          content="Explore Our Range Of 100% Pure, Farm-Fresh Dairy Products, Including A2 Cow Milk, Buffalo Milk, Curd, and more. No Preservatives Just Natural Goodness!."
        />
        <meta name="keywords" content="Milk, Paneer, Ghee, Curd, Chach" />

        <meta
          property="og:title"
          content="Vardaan Farms: Best Fresh, 100% Natural and Chemical Free Dairy products"
        />
        <meta
          property="og:description"
          content="Explore Our Range Of 100% Pure, Farm-Fresh Dairy Products, Including A2 Cow Milk, Buffalo Milk, Curd, and more. No Preservatives Just Natural Goodness!."
        />
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:url" content="https://vardaanfarms.com/products" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vardaan Farms" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twiter:title"
          content="Best Fresh, 100% Natural and Chemical Free Dairy products"
        />
        <meta
          name="twitter:description"
          content="Explore Our Range Of 100% Pure, Farm-Fresh Dairy Products, Including A2 Cow Milk, Buffalo Milk, Curd, and more. No Preservatives Just Natural Goodness!."
        />
        <meta
          name="twitter:image"
          content=""
        />
        <meta name="twitter:url" content="https://vardaanfarms.com/products" />

        <meta />
        <link rel="canonical" href="https://vardaanfarms.com/products" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      <div>
        {productsData.map((productData, id) => (
          <Product
            key={id}
            data={{ ...productData, side: `${id % 2 == 0 ? "right" : "left"}` }}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
