import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Planos Residenciais', href: '#planos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors text-sm uppercase tracking-wide ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-brand-orange' 
                    : 'text-gray-200 hover:text-brand-teal'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <Button variant="outline" size="sm" className="ml-4 gap-2">
              <User size={18} />
              Área do Cliente
            </Button>
            
            <Button variant="primary" size="sm">
              Assine Já
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-brand-orange focus:outline-none`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-orange w-full text-center hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3 w-full max-w-xs">
              <Button variant="outline" className="w-full justify-center gap-2">
                 <User size={18} /> Área do Cliente
              </Button>
              <Button variant="primary" className="w-full justify-center">
                Assine Já
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};