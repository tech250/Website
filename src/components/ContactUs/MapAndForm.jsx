import React from "react";

const MapAndForm = () => {
  return (
    <div className="">
      <div className="custom-container flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center justify-between">
        {/* for img */}
        <div className="w-full md:w-4/10 relative z-[1]">
          <img src="./map.png" alt="Map" className="w-full md:w-full z-[2]"/>
          <i className="fa-solid fa-location-dot z-[3] top-1/2 left-1/2 text-black/50 text-2xl animate-ping absolute -translate-y-1/2"></i>
        </div>
        {/* for form */}
        <div className="w-full md:w-1/2">
          <form action="" className="flex flex-col gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black/80">Leave A Message</h2>
            <p className="text-black/50">Have a question, feedback, or just want to say hi? Drop us a message, and we'll get back to you as soon as we can. We're here to help and listen to what you have to say.</p>
            <div className="grid gap-2 grid-cols-2">
              <input
                type="text"
                placeholder="Name *"
                className="outline-none border p-2 border-black/50 text-black/50"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="outline-none border p-2 border-black/50 text-black/50"
              />
              <input
                type="email"
                placeholder="Email *"
                className="outline-none border p-2 border-black/50 text-black/50"
              />
              <input
                type="subject"
                placeholder="Subject *"
                className="outline-none border p-2 border-black/50 text-black/50"
              />
            </div>
            <textarea name="" id="" placeholder="Message" className="p-2 border text-black/50 border-black/50 resize-none h-[250px] outline-none"></textarea>
            <button className="p-2 bg-black/50 text-white/70 cursor-pointer">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MapAndForm;
