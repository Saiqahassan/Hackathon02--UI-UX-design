import React from 'react';

const Hero = () => {
  return (
    <main>
      <div className="w-full max-w-[1000px] h-auto md:h-[500px] flex flex-col md:flex-row bg-[#2A254B] mx-auto">
        <div className="text-left w-full md:w-[513px] p-6 md:p-14">
          <h2 className="text-white font-sans text-2xl md:text-[32px] font-normal leading-normal md:leading-[44.8px]">
            The furniture brand for the future, with timeless designs
          </h2>
          <button className="w-full md:w-[170px] h-12 md:h-14 text-white bg-[#F9F9F926] mt-6 md:mt-14">
            View collection
          </button>
          <p className="text-white text-sm md:text-base font-normal font-sans mt-4 md:mt-16">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        <div className="hidden md:block md:w-[500px]">
          <img
            className="object-cover h-[500px] ml-auto"
            src="/chair.png"
            alt="chair"
          />
        </div>
      </div>

      <div>
        <div className="m-8 md:m-28 text-center">
          <h3 className="text-[#2A254B] text-lg md:text-2xl font-normal">
            What makes our brand different
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 px-4 md:px-16">
          <div className="w-full md:w-[270px] h-auto text-[#2A254B] mx-auto">
            <img src="/Delivery.png" alt="delivery-logo" />
            <h4 className="text-lg md:text-xl font-normal font-sans mt-4">
              Next day as standard
            </h4>
            <p className="text-xs mt-3">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className="w-full md:w-[270px] h-auto text-[#2A254B] mx-auto">
            <img src="/Checkmark.png" alt="checkmark-logo" />
            <h4 className="text-lg md:text-xl font-normal font-sans mt-4">
              Made by true artisans
            </h4>
            <p className="text-xs mt-3">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          <div className="w-full md:w-[270px] h-auto text-[#2A254B] mx-auto">
            <img src="/Purchase.png" alt="purchase-logo" />
            <h4 className="text-lg md:text-xl font-normal font-sans mt-4">
              Unbeatable prices
            </h4>
            <p className="text-xs mt-3">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>

          <div className="w-full md:w-[270px] h-auto text-[#2A254B] mx-auto">
            <img src="/Sprout.png" alt="sprout-logo" />
            <h4 className="text-lg md:text-xl font-normal font-sans mt-4">
              Recycled packaging
            </h4>
            <p className="text-xs mt-3">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
