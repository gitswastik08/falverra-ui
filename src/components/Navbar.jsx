import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navItems = ["Home", "Services", "Pricing", "How It Works", "Blog"];

  return (
    <nav className="sm:px-16 px-6 w-full fixed z-30 bg-white shadow-md h-20 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-700">LOGO</h1>

      <ul className="hidden md:flex gap-10 text-gray-600 text-base font-medium">
        {navItems.map((item) => (
          <li
            key={item}
            className="hover:text-black cursor-pointer transition-colors duration-200"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-4">
        <button className="px-5 py-2 text-[#c89100] font-semibold border  hover:bg-[#c89100] hover:text-white rounded-full transition-all">
          Login
        </button>
        <button className="px-5 py-2 text-[#c89100] font-semibold border  hover:bg-[#c89100] hover:text-white rounded-full transition-all">
          Signup
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <i
          className={`ri-${
            toggle ? "close-large-line" : "menu-line"
          } text-2xl cursor-pointer`}
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg transition-transform duration-300 z-40 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 p-6 ">
          <div className="w-full flex items-center justify-end">
            <i
              class="ri-close-large-line text-2xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            ></i>
          </div>
          {navItems.map((item) => (
            <p
              key={item}
              className="text-lg text-gray-700 font-medium hover:text-black cursor-pointer transition-all"
            >
              {item}
            </p>
          ))}

          <hr className="border-gray-200" />

          <button className="px-4 py-2 text-[#c89100]  hover:bg-[#c89100] hover:text-white font-semibold border border-[#c89100] rounded-full">
            Login
          </button>
          <button className="px-4 py-2 text-[#c89100] font-semibold border border-[#c89100]  hover:bg-[#c89100] hover:text-white rounded-full">SignUp</button>
        </div>
      </div>

      {/* Background Blur Overlay */}
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
