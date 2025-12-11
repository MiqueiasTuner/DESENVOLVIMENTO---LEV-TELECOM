import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Plans } from './components/Plans';
import { Solutions } from './components/Solutions';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Plans />
        <Solutions />
        <section className="py-20 bg-brand-orange text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para acelerar sua conexão?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contrate agora mesmo e tenha instalação gratuita em até 24 horas.
            </p>
            <button className="bg-white text-brand-orange px-8 py-3.5 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors">
              Contratar Agora
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;