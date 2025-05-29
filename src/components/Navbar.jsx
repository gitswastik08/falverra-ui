import React, { useState } from "react";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`sm:px-16 px-8  flex w-full sm:fixed sm:z-30 h-20 font-sans bg-white items-center justify-between  py-6`}
    >
      <h1 className="cursor-pointer text-2xl font-semibold text-[#6e6b6b]">
        LOGO
      </h1>
      <div className="flex items-center justify-between w-[60%] ">
        <ul className="sm:list-none text-nowrap sm:flex flex-row gap-10 text-[#00000094] hidden md:flex">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Services</li>
          <li className="hover:text-black cursor-pointer">Pricing</li>
          <li className="hover:text-black cursor-pointer block">
            How It Works
          </li>
          <li className="hover:text-black cursor-pointer">Blog</li>
        </ul>
        <div className="gap-0  flex ">
          <button className="hover:border-[#c89100] text-[#c89100] border-2 border-transparent px-6 py-2 font-semibold text-sm sm:text-lg rounded-[1vw] cursor-pointer  ">
            Login
          </button>

          <button className="hover:border-[#c89100] text-[#c89100] border-2 border-transparent px-6 py-2 text-sm sm:text-lg   font-semibold rounded-[1vw]  cursor-pointer   ">
            Signup
          </button>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <i
              className={
                toggle
                  ? "ri-close-large-line text-2xl"
                  : "ri-menu-line text-2xl"
              }
              onClick={() => {
                setToggle(!toggle);
              }}
            ></i>

            <div
              className={`${
                !toggle ? "hidden transition-all ease-in-out" : "flex"
              } px-16 py  black-gradient absolute top-20  w-full h-screen  my-2 right-0 z-10 text-xl backdrop-blur-lg bg-white/30 p-6 rounded-lg flex justify-end items-start `}
            >
              <ul className="list-none flex justify-end text-[#0000009c] flex-col gap-9">
                <li className="hover:text-black cursor-pointer">Home</li>
                <li className="hover:text-black cursor-pointer">Services</li>
                <li className="hover:text-black cursor-pointer">Pricing</li>
                <li className="hover:text-black cursor-pointer block">
                  How It Works
                </li>
                <li className="hover:text-black cursor-pointer">Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
