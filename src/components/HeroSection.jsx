import React from "react";

const HeroSection = () => {
  return (
    <section className="flex h-screen items-center justify-center px-4 pt-4 md:pt-12 bg-[#0a0a0a] text-white font-inter relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 42, 67, 0.4), rgba(16, 42, 67, 0.6)), url('https://res.cloudinary.com/drq4idzdj/image/upload/v1750978906/pexels-jonathanborba-14891553_smfum2.jpg')`
          }}
        />
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto relative container py-8">
        

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Send Crypto Instantly<br />
          <span className="text-[#f7b916]">Across the</span>{" "}
          <span className="text-[#f78f1a]">World</span>
        </h1>

        {/* Description */}
        <p className="text-[#d1d1d1] text-xl md:text-2xl leading-relaxed mt-2 mb-4 sm:mb-6 mx-auto">
          Transfer over 1,000 cryptocurrencies including Bitcoin, Ethereum, and USDT with lightning-fast speed, military-grade security, and the lowest fees in the market.
        </p>

        {/* Buttons */}
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-8 sm:mt-16 px-4">
          <button className="w-full sm:w-auto sm:flex-1 sm:max-w-[200px] px-6 py-3 sm:px-8 sm:py-4 font-bold bg-gradient-to-r from-[#f7b916] to-[#f78f1a] text-black rounded-lg hover:from-[#f78f1a] hover:to-[#f7b916] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Trading
          </button>
          <button className="w-full sm:w-auto sm:flex-1 sm:max-w-[200px] px-6 py-3 sm:px-8 sm:py-4 font-bold border-2 border-[#f7b916] text-[#f7b916] bg-transparent rounded-lg hover:bg-[#f7b916] hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Live Rates
          </button>
          <button className="w-full sm:w-auto sm:flex-1 sm:max-w-[200px] px-6 py-3 sm:px-8 sm:py-4 font-bold bg-gradient-to-r from-[#f7b916] to-[#f78f1a] text-black rounded-lg hover:from-[#f78f1a] hover:to-[#f7b916] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Swap Now
          </button>
        </div>

        {/* Arrow */}
        <div className="mt-10 text-2xl text-[#f7b916] animate-bounce">
          ↓
        </div>
      </div>
    </section>
  );
};

export default HeroSection;