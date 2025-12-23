import React from 'react';
import { Button } from './Button';
import { ChevronRight, Wifi } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
          alt="Pessoas conectadas" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-gray-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-bold text-sm mb-6 animate-fade-in-up backdrop-blur-sm">
            <Wifi size={16} className="mr-2" />
            A Internet fibra #1 da região
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
            Conecte-se ao <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">Futuro</span> com a Lev
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md">
            Experimente a ultra velocidade da fibra óptica. Jogue, assista filmes em 4K e trabalhe de casa sem travamentos. Estabilidade que você confia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#planos">
              <Button size="lg" className="group shadow-brand-orange/20 w-full sm:w-auto">
                Ver Planos Disponíveis
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-orange hover:border-white bg-white/5 backdrop-blur-sm font-semibold transition-all duration-300 w-full sm:w-auto">
                Falar com Consultor
              </Button>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-200 font-semibold">
             <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                Instalação Rápida
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                Suporte Local
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                Wi-Fi 6 Disponível
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};