import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  const tNav = useTranslations('nav');
  
  return (
    <div>
      {/* Hero Section - Modern Premium */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-angola-red/[0.03] via-transparent to-angola-yellow/[0.03] pointer-events-none" />
        
        {/* Floating shapes background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-angola-red/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-angola-yellow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-angola-red/20 bg-angola-red/5 text-angola-red text-sm font-medium shadow-soft animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-angola-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-angola-red"></span>
            </span>
            AI-Powered Solutions
          </div>

          <h1 className="font-bold mb-6 text-gray-900 dark:text-white animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">{t('hero.title')}</span>
            <br />
            <span className="text-gray-800 dark:text-gray-100">{t('hero.subtitle')}</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="./projects" 
              className="group px-8 py-4 bg-angola-red hover:bg-angola-red-dark text-white rounded-xl font-semibold text-base shadow-soft-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center gap-2">
                {t('hero.viewWork')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a 
              href="./contact" 
              className="px-8 py-4 border-2 border-angola-red/20 bg-white dark:bg-gray-900 text-angola-red hover:border-angola-red hover:bg-angola-red/5 rounded-xl font-semibold text-base shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5"
            >
              {t('hero.getInTouch')}
            </a>
          </div>
          
          {/* Dashboard Screenshot Showcase */}
          <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-angola-red to-angola-yellow rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-gray-200/50 dark:border-white/10 shadow-soft-lg overflow-hidden transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                  <img 
                    src="/images/dashboard-preview-placeholder.svg" 
                    alt="Dashboard Financeiro Angola Preview" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <svg className="w-5 h-5 mx-auto text-gray-400 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Overview - Modern Cards */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-bold text-gray-900 dark:text-white mb-4">
              {t('services.title')} <span className="gradient-text">{t('services.titleAccent')}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Empowering businesses with cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-angola-red to-angola-yellow rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative h-full bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-angola-red/10 to-angola-red/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{t('services.aiAutomation.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('services.aiAutomation.description')}
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-angola-red to-angola-yellow rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative h-full bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-angola-red/10 to-angola-red/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{t('services.fullStack.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('services.fullStack.description')}
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-angola-red to-angola-yellow rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative h-full bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-angola-red/10 to-angola-red/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{t('services.scalable.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('services.scalable.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Premium Showcase */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-angola-red text-white rounded-full font-medium text-sm shadow-soft">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured Project
            </span>
          </div>

          <h2 className="font-bold text-center mb-16 text-gray-900 dark:text-white">
            {t('featured.title')} <span className="gradient-text">{t('featured.titleAccent')}</span>
          </h2>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-angola-red via-angola-yellow to-angola-red rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-700" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-soft-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t('featured.projectTitle')}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {t('featured.projectDescription')}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-10">
                    <span className="px-3.5 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">Next.js 14</span>
                    <span className="px-3.5 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">TypeScript</span>
                    <span className="px-3.5 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">Prisma</span>
                    <span className="px-3.5 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">PostgreSQL</span>
                    <span className="px-3.5 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">Redis</span>
                  </div>
                  <a 
                    href="./case-studies/dashboard-financeiro" 
                    className="inline-flex items-center gap-2 text-angola-red hover:text-angola-red-dark font-semibold text-base transition-all duration-300 group/link"
                  >
                    {t('featured.readCaseStudy')}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 lg:min-h-[500px] overflow-hidden">
                  <img 
                    src="/images/dashboard-preview-placeholder.svg" 
                    alt="Dashboard Financeiro Angola Preview" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Clean Grid */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-bold text-gray-900 dark:text-white mb-4">
              {t('techStack.title')} <span className="gradient-text">{t('techStack.titleAccent')}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Modern, scalable, and battle-tested technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Next.js', 'TypeScript', 'React', 'Prisma', 'PostgreSQL', 'Redis', 'TailwindCSS', 'Node.js', 'Vercel', 'Git', 'REST APIs', 'AI Agents'].map((tech) => (
              <div 
                key={tech} 
                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-soft-lg hover:border-angola-red/20 transition-all duration-300 cursor-default"
              >
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-angola-red transition-colors">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern & Centered */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-angola-red via-angola-red-dark to-angola-red" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {t('cta.title')} <span className="text-angola-yellow">{t('cta.titleAccent')}</span>?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="./contact" 
              className="group px-8 py-4 bg-white hover:bg-gray-50 text-angola-red rounded-xl font-semibold text-base shadow-soft-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center gap-2">
                {t('cta.button')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a 
              href="./projects" 
              className="px-8 py-4 border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-[1.02]"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
