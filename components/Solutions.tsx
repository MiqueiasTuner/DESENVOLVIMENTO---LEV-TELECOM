import React from 'react';
import { SOLUTIONS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Solutions = () => {
  return (
    <section id="solucoes" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-brand-teal font-bold uppercase tracking-wider text-sm mb-2">Soluções Corporativas e Residenciais</h2>
            <h3 className="text-4xl font-bold mb-4">Tecnologia que conecta</h3>
            <p className="text-gray-300 text-lg">
              Soluções integradas desenhadas para garantir a máxima performance da sua conexão.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white bg-white/10 hover:bg-brand-orange hover:border-brand-orange border border-white/20 px-6 py-2.5 rounded-full transition-all font-medium mt-6 md:mt-0">
            Ver todas as soluções <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-gray-700 hover:border-brand-orange/50 transition-colors shadow-2xl bg-gray-800">
              <img 
                src={solution.image} 
                alt={solution.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <h4 className="text-2xl font-bold mb-3 text-white drop-shadow-md">{solution.title}</h4>
                  <p className="text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 leading-snug font-medium drop-shadow-sm h-0 group-hover:h-auto overflow-hidden">
                    {solution.description}
                  </p>
                  <div className="flex items-center text-brand-orange font-semibold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    Saiba mais <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
                <div className="w-full h-1 bg-gray-700 mt-4 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-orange w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-brand-orange font-medium">
            Ver todas as soluções <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};