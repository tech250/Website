const AboutUsSection = () => {
  return (
    <div>
      <div className="custom-container flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 md:items-center">
        <div className="w-full md:w-1/2 flex flex-col z-[1] relative">
          <img src="" alt="" className="w-4/5 aspect-square" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h4>ABOUT US</h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 p-1 w-fit">
            Crafting Dairy Excellence
          </h2>
          <div className="flex flex-col gap-2 text-black/50">
            <p>
              At Vardaan Farms, we are committed to producing grass-fed milk
              commercial that blends ethical farming with innovation, ensuring
              pure, natural dairy for consumers who demand only the best.
            </p>
            <p>
              From our farms to your table, we follow strict quality control
              processes to ensure freshness, hygiene, and sustainability. Our
              cows graze on lush green pastures, producing nutrient-rich,
              grass-fed milk commercial that supports a healthy lifestyle.
            </p>
            <p>
              With an emphasis on tradition and transparency, we deliver dairy
              products that retain authentic flavor, essential nutrients, and
              uncompromised quality. Whether for personal use or commercial
              needs, Vardaan Farms is your trusted partner for premium dairy
              excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
