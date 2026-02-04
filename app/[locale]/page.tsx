import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  const tNav = useTranslations('nav');
  
  return (
    <div>
      {/* Hero Section - Apple-style */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Angola color accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-angola-red/5 via-transparent to-angola-yellow/5 pointer-events-none" />
        
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12 py-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in">
            <span className="text-angola-red">{t('hero.title')}</span>
            <br />
            {t('hero.subtitle')}
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="./projects" 
              className="px-10 py-4 bg-angola-red hover:bg-angola-red-dark text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 whitespace-nowrap"
            >
              {t('hero.viewWork')}
            </a>
            <a 
              href="./contact" 
              className="px-10 py-4 border-2 border-angola-red text-angola-red hover:bg-angola-red hover:text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 whitespace-nowrap"
            >
              {t('hero.getInTouch')}
            </a>
          </div>
          
          {/* Dashboard Screenshot Showcase */}
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500">
              <div className="aspect-video bg-background/10 border-b border-white/10 overflow-hidden">
                <img 
                  src="/images/dashboard-preview-placeholder.svg" 
                  alt="Dashboard Financeiro Angola Preview" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Overview - Glassmorphism */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16">
            {t('services.title')} <span className="text-accent">{t('services.titleAccent')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div className="group backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-10 hover:-translate-y-2 hover:shadow-3xl hover:border-angola-red/30 transition-all duration-300">
              <div className="w-14 h-14 bg-angola-yellow/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-angola-yellow/30 transition-colors duration-300">
                <svg className="w-7 h-7 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('services.aiAutomation.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('services.aiAutomation.description')}
              </p>
            </div>
            
            <div className="group backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-10 hover:-translate-y-2 hover:shadow-3xl hover:border-angola-red/30 transition-all duration-300">
              <div className="w-14 h-14 bg-angola-yellow/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-angola-yellow/30 transition-colors duration-300">
                <svg className="w-7 h-7 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('services.fullStack.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('services.fullStack.description')}
              </p>
            </div>
            
            <div className="group backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-10 hover:-translate-y-2 hover:shadow-3xl hover:border-angola-red/30 transition-all duration-300">
              <div className="w-14 h-14 bg-angola-yellow/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-angola-yellow/30 transition-colors duration-300">
                <svg className="w-7 h-7 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('services.scalable.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('services.scalable.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Larger Showcase */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-block px-6 py-2 bg-angola-red text-white rounded-full font-semibold text-sm">
              Featured Project
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16">
            {t('featured.title')} <span className="text-angola-red">{t('featured.titleAccent')}</span>
          </h2>
          
          <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 lg:p-16">
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">{t('featured.projectTitle')}</h3>
                <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
                  {t('featured.projectDescription')}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-angola-yellow text-black rounded-full text-sm font-semibold">Next.js 14</span>
                  <span className="px-4 py-2 bg-angola-yellow text-black rounded-full text-sm font-semibold">TypeScript</span>
                  <span className="px-4 py-2 bg-angola-yellow text-black rounded-full text-sm font-semibold">Prisma</span>
                  <span className="px-4 py-2 bg-angola-yellow text-black rounded-full text-sm font-semibold">PostgreSQL</span>
                  <span className="px-4 py-2 bg-angola-yellow text-black rounded-full text-sm font-semibold">Redis</span>
                </div>
                <a 
                  href="./case-studies/dashboard-financeiro" 
                  className="inline-flex items-center text-angola-red hover:text-angola-red-dark font-bold text-lg md:text-xl transition-all duration-300 group"
                >
                  {t('featured.readCaseStudy')}
                  <svg className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500">
                <img 
                  src="/images/dashboard-preview-placeholder.svg" 
                  alt="Dashboard Financeiro Angola Preview" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Better Visual Presentation */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16">
            {t('techStack.title')} <span className="text-accent">{t('techStack.titleAccent')}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {['Next.js', 'TypeScript', 'React', 'Prisma', 'PostgreSQL', 'Redis', 'TailwindCSS', 'Node.js', 'Vercel', 'Git', 'REST APIs', 'AI Agents'].map((tech) => (
              <div 
                key={tech} 
                className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-xl rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl hover:border-angola-red/30 transition-all duration-300 cursor-default"
              >
                <p className="font-bold text-lg">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Angola Red */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            {t('cta.title')} <span className="text-angola-red">{t('cta.titleAccent')}</span>?
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('cta.description')}
          </p>
          <a 
            href="./contact" 
            className="inline-block px-10 py-4 bg-angola-red hover:bg-angola-red-dark text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 whitespace-nowrap"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}
