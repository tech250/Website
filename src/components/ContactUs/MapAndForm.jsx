import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import db from "../../firebase/firebase"; // ✅ static import
import { ref, set } from "firebase/database";
import { useRef, useState } from "react";

const MapAndForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const dataToSend = Object.fromEntries(formData.entries());

    if (!dataToSend.name || !dataToSend.phoneNumber || !dataToSend.email || !dataToSend.subject) {
      toast.error("Fields Can't Be Empty");
      setLoading(false);
      return;
    }

    const userRef = ref(db, "users/" + Date.now());

    set(userRef, dataToSend)
      .then(() => {
        toast.success("Your Response is Recorded");
        form.current.reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something Went Wrong");
      })
      .finally(() => setLoading(false));
  }

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
            <img
              src="/location-dot-solid-full.svg"
              alt="Location icon"
              className="z-[3] top-1/2 left-1/2 text-2xl animate-ping absolute -translate-y-1/2"
              width="20px"
              height="20px"
            />
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
                className={`p-2 bg-black/50 text-white/70 cursor-pointer transition ${loading ? "cursor-not-allowed hover:scale-[98%]" : ""}`}
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
