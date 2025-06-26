import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 h-16 bg-[#0B111E] font-inter">
      {/* Logo */}
      <div className="text-white font-semibold text-base sm:text-lg">
        Crypto<span className="text-[#F9A825]">Tuma</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-white font-medium text-sm sm:text-base">
        <a href="#" className="hover:underline focus:underline">
          Home
        </a>
        <a href="#" className="hover:underline focus:underline">
          How It Works
        </a>
        <a href="#" className="hover:underline focus:underline">
          Blog
        </a>
        <a href="#" className="hover:underline focus:underline">
          Contact
        </a>
      </div>

      {/* Button */}
      <button
        type="button"
        className="bg-[#F9A825] text-[#0B111E] font-bold text-sm sm:text-base rounded-md px-4 py-2 whitespace-nowrap hover:opacity-90 focus:outline-white focus:outline-offset-2 transition"
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
