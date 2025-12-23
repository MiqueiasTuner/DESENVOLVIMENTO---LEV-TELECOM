import React from 'react';

export const Logo = () => {
  return (
    <div className="flex flex-col leading-none select-none group cursor-pointer">
      <span className="text-3xl sm:text-4xl font-black text-brand-orange tracking-tighter transition-transform duration-300 group-hover:scale-105">
        Lev
      </span>
      <span className="text-[10px] sm:text-[12px] font-bold text-brand-teal uppercase tracking-[0.25em] -mt-1 group-hover:text-brand-orange transition-colors duration-300">
        Internet
      </span>
    </div>
  );
};