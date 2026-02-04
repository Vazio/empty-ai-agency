'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', label: locale === 'pt' ? 'Início' : 'Home', href: `/${locale}` },
    { key: 'projects', label: locale === 'pt' ? 'Projetos' : 'Projects', href: `/${locale}/projects` },
    { key: 'about', label: locale === 'pt' ? 'Sobre' : 'About', href: `/${locale}/about` },
    { key: 'caseStudies', label: locale === 'pt' ? 'Casos de Estudo' : 'Case Studies', href: `/${locale}/case-studies` },
    { key: 'contact', label: locale === 'pt' ? 'Contacto' : 'Contact', href: `/${locale}/contact` },
  ];

  return (
    <nav 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-lg' 
          : 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80'
      } border-b border-gray-200/50`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href={`/${locale}`} 
            className="text-2xl md:text-3xl font-bold transition-transform duration-300 hover:scale-105"
          >
            <span className="text-angola-red">Empty</span> AI Agency
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-base font-medium">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative group transition-colors duration-300 hover:text-angola-red"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-angola-red group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-300 dark:border-gray-700">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-angola-red rounded-lg p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-angola-red/10 hover:text-angola-red font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-4 border-t border-gray-200 dark:border-gray-800">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
