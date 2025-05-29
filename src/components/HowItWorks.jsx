import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      class: "ri-notification-4-line",
      title: "Choose A Service Or Subscribe",
    },
    {
      class: "ri-file-2-line",
      title: "Fill A Quick Form",
    },
    {
      class: "ri-mail-ai-line",
      title: "Get Your Solution Delivered To\nYour Inbox / Dashboard",
    },
  ];

  return (
    <section className="sm:py-40 py-16 px-4 bg-[#10123d13]">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

      <div className="relative flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto">
        <div className="hidden sm:block absolute top-[26px] left-12 right-12 h-0.5 border-t-2 border-dashed border-yellow-400 z-0" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex sm:flex-col items-center my-2   flex-row sm:text-center gap-4  w-full px-4 z-10"
          >
            <div className="w-6 h-6 ' rounded-full bg-yellow-300 border-4 border-white shadow-md z-10 relative mb-4" />

            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-xl shadow-sm flex items-center justify-center mb-4 ] hover:bg-blue-400 group">
              <i class={`${step.class} group-hover:text-white text-xl  text-blue-500`}></i>
            </div>

            <p className="text-base leading-loose  text-gray-700 whitespace-pre-line">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
