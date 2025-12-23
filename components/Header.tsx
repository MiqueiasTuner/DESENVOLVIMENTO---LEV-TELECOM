import React, { useState, useEffect } from 'react';
import { Menu, X, User, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
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
                    ? 'text-gray-700 dark:text-gray-200 hover:text-brand-orange dark:hover:text-brand-orange' 
                    : 'text-gray-200 hover:text-brand-teal'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Alternar tema"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <Button variant="outline" size="sm" className="ml-2 gap-2">
              <User size={18} />
              Área do Cliente
            </Button>
            
            <Button variant="primary" size="sm">
              Assine Já
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                 isScrolled ? 'text-gray-700 dark:text-yellow-400' : 'text-white'
              }`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-700 dark:text-white' : 'text-white'} hover:text-brand-orange focus:outline-none`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl absolute top-full left-0 right-0 border-t border-gray-100 dark:border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-orange dark:hover:text-brand-orange w-full text-center hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
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