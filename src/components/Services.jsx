import React from "react";

// Import images
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";

const Services = () => {
  const services = [
    {
      title: "Social Media\nCalendar",
      desc: "Get ready-to-use solutions like funnels.",
      btnText: "Try Now",
      image: icon1,
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      title: "Offer Letter\nCreator",
      desc: "Get ready-to-use solutions like funnels.",
      btnText: "Try Now",
      image: icon2,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
    },
    {
      title: "Business\nProblem Solver",
      desc: "Get ready-to-use solutions like funnels.",
      btnText: "Try Now",
      image: icon3,
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    {
      title: "Invoice\nGenerator",
      desc: "Get ready-to-use solutions like funnels.",
      btnText: "Try Now",
      image: icon4,
      bgColor: "bg-red-50",
      textColor: "text-red-800",
    },
    {
      title: "Funnel\nBuilder",
      desc: "Get ready-to-use solutions like funnels.",
      btnText: "Try Now",
      image: icon5,
      bgColor: "bg-purple-50",
      textColor: "text-purple-800",
    },
  ];

  return (
    <section className="sm:py-40 py-16 px-4 sm:px-10">
      <h2 className="text-center text-3xl font-bold mb-10">Our Services</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`relative w-[90%] sm:h-[200px] sm:w-[380px] h-[180px] p-4 rounded-xl ${service.bgColor} flex flex-col justify-between`}
          >
            <div>
              <div
                className={`font-bold text-lg sm:text-2xl whitespace-pre-line ${service.textColor}`}
              >
                {service.title}
              </div>
              <p className="text-sm sm:text-sm text-gray-600 mt-1">
                {service.desc}
              </p>
            </div>

            {service.btnText && (
              <button className="mt-2 px-3 py-1  border border-yellow-400 text-yellow-500 text-sm sm:text-lg rounded w-fit  hover:bg-[#FDCB14] hover:text-white">
                {service.btnText}
              </button>
            )}

            {service.image && (
              <img
                src={service.image}
                alt="icon"
                className="absolute bottom-2 right-2 w-12 h-12 sm:w-60 object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
