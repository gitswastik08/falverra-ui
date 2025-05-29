import React from "react";

const feedbacks = [
  {
    name: "John Carter",
    role: "CEO at Rento",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
  },
  {
    name: "John Carter",
    role: "CEO at Rento",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 4.5,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
  },
  {
    name: "John Carter",
    role: "CEO at Rento",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 4.5,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
  },
];

const Feedback = () => {
  return (
    <section className="bg-orange-400 sm:py-40 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-2">-Testimonials-</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          What our customers are <br className="hidden sm:block" />
          saying about us
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {feedbacks.map((t ) => (
            <div
              
              className="bg-white text-gray-800 p-6 rounded-xl shadow-md w-full sm:w-1/3"
            >
              <div className="flex mb-4 text-yellow-400 text-xl">
                <h2>★★★★★</h2>
              </div>
              <p className="text-sm mb-6">{t.text}</p>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center gap-4 mt-10">
          <button className="w-10 h-10 bg-white text-orange-400 rounded-full shadow hover:bg-orange-100">
            ←
          </button>
          <button className="w-10 h-10 bg-white text-orange-400 rounded-full shadow hover:bg-orange-100">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
