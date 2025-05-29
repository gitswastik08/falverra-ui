import React from "react";

const CtaBanner = () => {
  return (
    <section className="px-4 py-24">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl py-16 px-10 text-center relative overflow-hidden">

    

        <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-6 leading-snug">
          Your Time is Precious. Let Falverra <br className="hidden sm:block" /> Work For You.
        </h2>

        <button className="bg-white text-orange-500 font-semibold px-6 py-2 rounded-md shadow hover:bg-orange-100 transition">
          Start Now
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;
