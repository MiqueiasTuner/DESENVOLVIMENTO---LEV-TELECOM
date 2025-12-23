import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_LINK, CONTACT_EMAIL, PHONE_NUMBER, INSTAGRAM_LEV, DEVELOPER_INSTA, DEVELOPER_LOGO } from '../constants';

export const Footer = () => {
  const clientAreaUrl = "https://portal.internetlev.com.br/auth/login";

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
              <a href={INSTAGRAM_LEV} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white transition-colors">
                <span className="sr-only">Instagram Lev</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white transition-colors">
                <span className="sr-only">Facebook Lev</span>
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white transition-colors">
                <span className="sr-only">Twitter Lev</span>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#planos" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors">Ver Planos</a></li>
              <li><a href="#solucoes" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors">Nossas Soluções</a></li>
              <li><a href="#sobre" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors">Sobre a Lev</a></li>
              <li><a href={clientAreaUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors">Área do Cliente</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Suporte</h4>
            <ul className="space-y-3">
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors font-semibold">WhatsApp Oficial</a></li>
              <li><a href={clientAreaUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors">Segunda via de Boleto</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <Phone size={20} className="text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors font-medium">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <Mail size={20} className="text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-orange transition-colors break-all">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                <span>Av. Pará, 14, Qd 103 Lt 03<br />Bairro Carrilho<br />Goianésia - GO</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p>© 2025 Lev Internet. Todos os direitos reservados.</p>
            <div className="hidden md:block w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
            <a 
              href={DEVELOPER_INSTA} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-900 hover:bg-brand-orange/10 transition-all border border-transparent hover:border-brand-orange/20"
            >
              <img 
                src={DEVELOPER_LOGO} 
                alt="miqueias Dev Logo" 
                className="w-6 h-6 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border border-gray-200 dark:border-gray-700" 
              />
              <span className="font-medium group-hover:text-brand-orange transition-colors">Desenvolvido por miqueias Dev</span>
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};