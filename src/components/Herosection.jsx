import React from "react";
import Button from "./Button";
import heroImage from "../assets/CardScreens.png";
import heroCard from "../assets/heroCard.png";

const Herosection = () => {
  return (
    <div className="flex  w-full flex-col gap-10 items-center sm:px-8 sm:flex-row sm:gap-0 sm:h-screen py-10 ">
      <div className="flex w-full  flex-col sm:gap-14 gap-7 px-8 ">
        <img src={heroCard} className="w-full" alt="" />
        <p className="text-xs sm:text-xl font-semibold text-[#000000a4]">
          Get ready-to-use solutions like funnels, invoices, calendars, and
          offer letters—on-demand or on a subscription.
        </p>
        <div className="flex gap-6">
          <Button>Get Started Now</Button>
          <Button>View Plans</Button>
        </div>
      </div>
      <div className=" w-full">
        <img src={heroImage} className=" w-full" alt="" />
      </div>
    </div>
  );
};

export default Herosection;
