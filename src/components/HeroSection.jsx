import React from "react";

const HeroSection = () => {
  return (
    <section className=" flex h-[calc(100vh-4rem)] items-center justify-center px-4 bg-[#0a0a0a] text-white font-inter relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 42, 67, 0.4), rgba(16, 42, 67, 0.6)), url('https://res.cloudinary.com/drq4idzdj/image/upload/v1750978906/pexels-jonathanborba-14891553_smfum2.jpg')`
        }}
      />
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto  relative container  ">
        {/* Logo */}
        <div className="text-3xl font-black flex justify-center items-center gap-1 mb-4">
          <span className="text-[#f7b916] transform -rotate-[15deg] leading-none">₿</span>
          <span className="text-white font-black">Crypto</span>
          <span className="text-[#f7b916] font-black">Tuma</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Send Crypto Instantly<br />
          <span className="text-[#f7b916]">Across the</span>{" "}
          <span className="text-[#f78f1a]">World</span>
        </h1>

        {/* Description */}
        <p className="text-[#d1d1d1] text-xl md:text-2xl leading-relaxed mt-2 mb-4 sm:mb-6  mx-auto">
          Transfer over 1,000 cryptocurrencies including Bitcoin, Ethereum, and USDT with lightning-fast speed, military-grade security, and the lowest fees in the market.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 sm:mt-16">
          <button className="min-w-[140px] md:min-w-[160px] px-8 py-4 font-bold bg-gradient-to-r from-[#f7b916] to-[#f78f1a] text-black rounded-lg hover:from-[#f78f1a] hover:to-[#f7b916] transition">
            Start Trading Now
          </button>
          <button className="min-w-[140px] md:min-w-[160px] px-8 py-4 font-bold  border border-[#f7b916] text-[#f7b916] bg-white rounded-lg hover:bg-[#f7b916] hover:text-black transition">
            View Live Rates
          </button>
           <button className="min-w-[140px] md:min-w-[160px] px-8 py-4 font-bold bg-gradient-to-r from-[#f7b916] to-[#f78f1a] text-black rounded-lg hover:from-[#f78f1a] hover:to-[#f7b916] transition">
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
