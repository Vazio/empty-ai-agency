import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Empty AI Agency | AI-Powered Solutions for Angola",
  description: "Building scalable AI-powered technology solutions for the Angolan market. Next.js, TypeScript, and autonomous agentic workflows.",
  keywords: ["AI Agency", "Angola", "Software Development", "Next.js", "TypeScript", "Automation"],
  authors: [{ name: "Empty AI Agency" }],
  openGraph: {
    title: "Empty AI Agency | AI-Powered Solutions for Angola",
    description: "Building scalable AI-powered technology solutions for the Angolan market.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empty AI Agency | AI-Powered Solutions for Angola",
    description: "Building scalable AI-powered technology solutions for the Angolan market.",
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <a href={`/${locale}`} className="text-2xl font-bold">
                  <span className="text-accent">Empty</span> AI Agency
                </a>
                <div className="hidden md:flex items-center space-x-6">
                  <a href={`/${locale}`} className="hover:text-accent transition-colors">
                    {locale === 'pt' ? 'Início' : 'Home'}
                  </a>
                  <a href={`/${locale}/projects`} className="hover:text-accent transition-colors">
                    {locale === 'pt' ? 'Projetos' : 'Projects'}
                  </a>
                  <a href={`/${locale}/about`} className="hover:text-accent transition-colors">
                    {locale === 'pt' ? 'Sobre' : 'About'}
                  </a>
                  <a href={`/${locale}/case-studies`} className="hover:text-accent transition-colors">
                    {locale === 'pt' ? 'Casos de Estudo' : 'Case Studies'}
                  </a>
                  <a href={`/${locale}/contact`} className="hover:text-accent transition-colors">
                    {locale === 'pt' ? 'Contacto' : 'Contact'}
                  </a>
                  <div className="ml-4 pl-4 border-l border-border">
                    <LanguageSwitcher />
                  </div>
                </div>
                <button className="md:hidden text-foreground">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <main className="pt-16">
            {children}
          </main>
          <footer className="bg-muted border-t border-border mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    <span className="text-accent">Empty</span> AI Agency
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {locale === 'pt' 
                      ? 'Soluções potenciadas por IA para o futuro digital de Angola.'
                      : "AI-powered solutions for Angola's digital future."}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">
                    {locale === 'pt' ? 'Links Rápidos' : 'Quick Links'}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href={`/${locale}`} className="hover:text-accent transition-colors">
                      {locale === 'pt' ? 'Início' : 'Home'}
                    </a></li>
                    <li><a href={`/${locale}/projects`} className="hover:text-accent transition-colors">
                      {locale === 'pt' ? 'Projetos' : 'Projects'}
                    </a></li>
                    <li><a href={`/${locale}/about`} className="hover:text-accent transition-colors">
                      {locale === 'pt' ? 'Sobre' : 'About'}
                    </a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">
                    {locale === 'pt' ? 'Projetos' : 'Projects'}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href={`/${locale}/case-studies/dashboard-financeiro`} className="hover:text-accent transition-colors">Dashboard Financeiro Angola</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">
                    {locale === 'pt' ? 'Contacto' : 'Contact'}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href={`/${locale}/contact`} className="hover:text-accent transition-colors">
                      {locale === 'pt' ? 'Entre em Contacto' : 'Get in Touch'}
                    </a></li>
                    <li><a href="https://github.com/empty-VL" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border text-center text-sm text-foreground/60">
                <p>&copy; {new Date().getFullYear()} Empty AI Agency. {locale === 'pt' ? 'Construído com' : 'Built with'} Next.js & TypeScript.</p>
              </div>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
