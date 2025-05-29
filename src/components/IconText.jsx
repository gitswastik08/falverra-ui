// src/components/IconText.jsx
import React from "react";

const IconText = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center bg-[#f5ecff] rounded-lg">
        <img src={icon} alt="icon" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
      </div>
      <p className="text-gray-800 sm:text-2l">{text}</p>
    </div>
  );
};

export default IconText;
