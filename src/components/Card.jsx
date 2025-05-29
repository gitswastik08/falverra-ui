import React from "react";
import whyFalverra from "../assets/WhyFalverra.jpg";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import IconText from "./IconText";

const Card = () => {
  return (
    <div className="w-full  flex gap-10 items-center justify-center flex-col sm:flex-row px-4 sm:py-40 bg-[#10123D0A]">
      <img
        src={whyFalverra}
        className="w-[90%] object-center object-cover mx-10 rounded-2xl  bg-slate-300  sm:w-1/4 "
        alt="Why Falverra"
      />

      <div className="w-full sm:w-fit flex flex-col space-y-4 mt-6 sm:mt-0 sm:pl-8">
        <h3 className="text-3xl font-semibold mb-2">Why Falverra.in?</h3>
        <IconText icon={f1} text="Save Time, Automate Repetitive Work" />
        <IconText icon={f2} text="Affordable Pricing for Entrepreneurs" />
        <IconText icon={f3} text="Ready-to-Use Professional Templates" />
        <IconText icon={f4} text="Built by Business Experts" />
        <IconText icon={f5} text="Trusted by 200+ businesses across India" />
      </div>
    </div>
  );
};

export default Card;
