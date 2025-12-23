import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-3 select-none group">
      <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
        <img 
          src="https://iili.io/fGTYhc7.png" 
          alt="Lev Internet Logo" 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-2xl sm:text-3xl font-black text-brand-orange tracking-tighter">Lev</span>
        <span className="text-[10px] sm:text-[12px] font-bold text-brand-teal uppercase tracking-[0.2em] -mt-1">Internet</span>
      </div>
    </div>
  );
};