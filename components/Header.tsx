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
      className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-gray-950/95 shadow-soft' 
          : 'backdrop-blur-lg bg-gray-950/90'
      } border-b border-gray-800/50`}
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <Link 
            href={`/${locale}`} 
            className="text-xl sm:text-2xl font-bold transition-all duration-300 hover:opacity-80"
          >
            <span className="gradient-text">Empty</span>{' '}
            <span className="text-white">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-angola-red dark:hover:text-angola-red transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-gray-300 dark:border-gray-700">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-angola-red/20"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-4 text-sm font-medium text-gray-300 hover:text-angola-red hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 px-4 border-t border-gray-800">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
