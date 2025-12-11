import React from 'react';
import { FEATURES } from '../constants';

export const Features = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((feature, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-white hover:bg-gray-50 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 text-brand-orange group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};