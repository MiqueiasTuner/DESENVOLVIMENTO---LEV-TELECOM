import React from 'react';
import { Check, Wifi, Zap, Headphones } from 'lucide-react';
import { PLANS, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';

export const Plans = () => {
  return (
    <section id="planos" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex flex-col items-center mb-4">
             <span className="text-gray-500 dark:text-gray-400 font-bold uppercase text-lg">Novos Planos</span>
             <span className="text-brand-orange font-extrabold uppercase text-xl">PLANOS SEM FIDELIDADE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full bg-white dark:bg-gray-900 border-2 border-[#43a0b1] shadow-xl hover:shadow-2xl ${
                plan.highlight ? 'scale-105 z-10' : ''
              }`}
            >
              <div className="bg-[#43a0b1] py-4 px-6 text-center">
                <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <span className="text-white text-5xl font-black">{plan.speed}</span>
                  <span className="text-white/90 text-xl font-bold uppercase">{plan.unit}</span>
                </div>
              </div>

              <div className="p-8 flex-grow text-center">
                <div className="flex flex-col items-center mb-6">
                  <span className="text-gray-400 text-sm font-bold uppercase">POR</span>
                  <div className="flex items-start">
                    <span className="text-gray-900 dark:text-white font-black text-2xl mt-2">R$</span>
                    <span className="text-gray-900 dark:text-white font-black text-7xl leading-none">{plan.price}</span>
                    <div className="flex flex-col items-start ml-1 mt-1">
                      <span className="text-gray-900 dark:text-white font-black text-2xl">,{plan.cents}</span>
                      <span className="text-gray-400 font-bold text-xs">/MÊS</span>
                    </div>
                  </div>
                </div>
                
                {plan.extra && (
                  <div className="text-[#43a0b1] font-bold text-sm mb-6 bg-cyan-50 dark:bg-cyan-900/20 py-1 rounded-lg">
                    {plan.extra}
                  </div>
                )}

                <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mb-6"></div>

                <ul className="space-y-4 mb-8 text-left inline-block mx-auto">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check size={18} className="text-brand-orange mr-3 flex-shrink-0" />
                      <span className="text-sm font-bold uppercase">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="primary" 
                    className="w-full justify-center py-4 text-base font-black uppercase tracking-widest"
                  >
                    Assinar Agora
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Bar from Image */}
        <div className="mt-16 bg-white dark:bg-gray-900 border-2 border-[#43a0b1] rounded-full p-4 md:p-8 flex flex-col md:flex-row justify-around items-center gap-8 shadow-lg">
           <div className="flex items-center gap-4">
              <Wifi className="text-brand-orange" size={32} />
              <span className="text-2xl font-black text-gray-800 dark:text-gray-200">Wi-Fi</span>
           </div>
           <div className="hidden md:block w-px h-12 bg-[#43a0b1]/30"></div>
           <div className="flex items-center gap-4">
              <Zap className="text-brand-orange" size={32} />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black text-gray-800 dark:text-gray-200">Instalação</span>
                <span className="text-xl font-black text-gray-800 dark:text-gray-200">rápida</span>
              </div>
           </div>
           <div className="hidden md:block w-px h-12 bg-[#43a0b1]/30"></div>
           <div className="flex items-center gap-4">
              <Headphones className="text-brand-orange" size={32} />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black text-gray-800 dark:text-gray-200">Suporte</span>
                <span className="text-xl font-black text-gray-800 dark:text-gray-200">técnico</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};