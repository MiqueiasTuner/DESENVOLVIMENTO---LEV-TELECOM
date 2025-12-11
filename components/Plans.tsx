import React from 'react';
import { Check, Wifi } from 'lucide-react';
import { PLANS } from '../constants';
import { Button } from './Button';

export const Plans = () => {
  return (
    <section id="planos" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-2">Nossos Planos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Escolha a velocidade ideal para você
          </h3>
          <p className="text-gray-600 text-lg">
            Planos completos com Wi-Fi Turbo e instalação grátis. Sem letras miúdas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-3xl transition-all duration-300 flex flex-col h-full ${
                plan.highlight 
                  ? 'border-2 border-brand-orange shadow-2xl scale-100 md:scale-105 z-10' 
                  : 'border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-orange to-red-500 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-md whitespace-nowrap">
                  {plan.tag}
                </div>
              )}

              <div className="p-8 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-extrabold text-gray-900">{plan.speed}</span>
                  <span className="text-xl font-bold text-gray-500 ml-1">{plan.unit}</span>
                </div>
                
                <div className="flex items-end mb-8">
                  <span className="text-lg text-gray-500 mb-1">R$</span>
                  <span className="text-4xl font-bold text-brand-orange leading-none">{plan.price}</span>
                  <span className="text-gray-500 font-medium mb-1">,90/mês</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check size={12} className="text-green-600" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                <Button 
                  variant={plan.highlight ? 'primary' : 'outline'} 
                  className="w-full justify-center py-3 text-base"
                >
                  Assinar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};