import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1306] text-white px-6 py-12 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-10">

       
        <div className="sm:col-span-1">
          <h2 className="text-xl font-bold mb-2">LOGO</h2>
          <p className="text-gray-400 leading-relaxed">
            This is a branch of GD Goenka Healthcare Academy, operating under GD Goenka’s national framework and academic standards.
          </p>
        </div>

       
        <div className="space-y-2">
          <div className="text-gray-300">📍 Opp. XYZ Landmark, Siliguri, WB</div>
          <div className="text-gray-300">📞 (123) 456-7890</div>
          <div className="text-gray-300">✉️ example@gmail.com</div>

          <div className="flex items-center gap-3 mt-2">
            <span className="text-white">Social Media:</span>
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>

        
        <div className="md:col-span-1 md:col-start-4 bg-[#2b2412] p-4 rounded-lg space-y-3">
          <h4 className="text-white font-semibold">Subscribe</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 rounded-l-md outline-none text-black w-full"
            />
            <button className="bg-yellow-400 px-4 rounded-r-md text-white font-bold">
              ➤
            </button>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionary
            business companies into their clients & their team.
          </p>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      
      <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400">
        <div className="flex gap-6 text-xs mb-4 sm:mb-0">
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Pricing</a>
          <a href="#">How It Works</a>
          <a href="#">Blog</a>
        </div>
        <p className="text-xs">&copy; 2025 • Lift Media Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
