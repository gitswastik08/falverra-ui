import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-3 py-2 text-sm sm:text-xl sm:px-6 sm:py-3 font-bold rounded-md border transition-all
        bg-white text-[#FDCB14] border-[#FDCB14]
        hover:bg-[#FDCB14] hover:text-black
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
