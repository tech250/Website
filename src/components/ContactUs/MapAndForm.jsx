import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { getDatabase, ref, set } from "firebase/database";
import { useRef } from "react";
import { useEffect, useState } from "react";
const MapAndForm = () => {
  const [database, setDatabase] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  function handleSubmit(e) {
    setLoading(true);
    const dataToSend = {};
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const [key, value] of formData.entries()) {
      dataToSend[`${key}`] = value;
    }
    console.log(dataToSend);
    if (
      dataToSend.name == "" ||
      dataToSend.phoneNumber == "" ||
      dataToSend.email == "" ||
      dataToSend.subject == ""
    ) {
      toast.error("Fields Can't Be Empty");
      setLoading(false);
    } else {
      const db = getDatabase();
      const useRef = ref(db, "users/" + new Date().getTime());
      set(useRef, dataToSend)
        .then(() => {
          toast.success("Your Response is Recorded");
          form.current.reset();
          setLoading(false);
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
          console.log(err);
          setLoading(false);
        });
    }
  }

  useEffect(() => {
    const loadDB = async () => {
      const db = await (
        await import("../../firebase/firebase.js")
      ).loadFirebase();
      setDatabase(db);
    };
    loadDB();
  }, []);

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="">
        <div className="custom-container flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center justify-between">
          {/* for img */}
          <a
            href="https://maps.app.goo.gl/bsPAvfkqSoWRbN7Y6"
            className="w-full md:w-4/10 relative z-[1]"
          >
            <img
              src="./map.webp"
              alt="Map"
              className="w-full md:w-full z-[2]"
            />
            <i className="fa-solid fa-location-dot z-[3] top-1/2 left-1/2 text-black/50 text-2xl animate-ping absolute -translate-y-1/2"></i>
          </a>
          {/* for form */}
          <div className="w-full md:w-1/2">
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit}
              ref={form}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black/80">
                Leave A Message
              </h2>
              <p className="text-black/50">
                Have a question, feedback, or just want to say hi? Drop us a
                message, and we'll get back to you as soon as we can. We're here
                to help and listen to what you have to say.
              </p>
              <div className="grid gap-2 grid-cols-2">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name *"
                  className="outline-none border p-2 border-black/50 text-black/50"
                />
                <input
                  required
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number *"
                  className="outline-none border p-2 border-black/50 text-black/50"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email *"
                  className="outline-none border p-2 border-black/50 text-black/50"
                />
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Subject *"
                  className="outline-none border p-2 border-black/50 text-black/50"
                />
              </div>
              <textarea
                type="text"
                name="Message"
                id=""
                placeholder="Message"
                className="p-2 border text-black/50 border-black/50 resize-none h-[250px] outline-none"
              ></textarea>
              <button
                type="submit"
                className="p-2 bg-black/50 text-white/70 cursor-pointer"
              >
                {loading ? (
                  <p className="p-3 rounded-full border-1 border-t-0 border-l-0 w-fit mx-auto border-white/80 animate-spin"></p>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapAndForm;
