import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contato" className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Levando a melhor conexão de internet fibra óptica para sua casa ou empresa. Velocidade, estabilidade e suporte que você pode confiar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange dark:hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange dark:hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange dark:hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#planos" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">Planos Residenciais</a></li>
              <li><a href="#solucoes" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">Para Empresas</a></li>
              <li><a href="#sobre" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">Teste de Velocidade</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">Área do Cliente</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">Segunda via de Boleto</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">Autoatendimento</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">Contratos e Regulamentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <Phone size={20} className="text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                <span>0800 538 0000</span>
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <Mail size={20} className="text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                <span>contato@levinternet.com.br</span>
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                <span>Av. Pará, 14, Qd 103 Lt 03<br />Bairro Carrilho<br />Goianésia - GO<br /><span className="text-sm text-gray-400">CEP: 76380-732</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>Todos os direitos reservados 2025 - sintese marketing</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};