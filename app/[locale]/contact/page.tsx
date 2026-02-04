import { getTranslations } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('contact');
  
  return (
    <div className="min-h-screen py-16 md:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            {t('title')} <span className="text-angola-red">{t('titleAccent')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">{t('letsConnect')}</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-angola-yellow/20 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-7 h-7 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('email')}</h3>
                  <a href="mailto:empty.vl.angola@gmail.com" className="text-lg text-foreground/70 hover:text-angola-red transition-colors break-all">
                    empty.vl.angola@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-angola-yellow/20 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-7 h-7 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('github')}</h3>
                  <a 
                    href="https://github.com/empty-VL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg text-foreground/70 hover:text-angola-red transition-colors break-all"
                  >
                    github.com/empty-VL
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-angola-yellow/20 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-7 h-7 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    {t('location')} <span className="ml-2">🇦🇴</span>
                  </h3>
                  <p className="text-lg text-angola-red font-semibold">{t('angola')}</p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">{t('whatToExpect.title')}</h3>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-angola-yellow mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">{t('whatToExpect.response')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-angola-yellow mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">{t('whatToExpect.consultation')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-angola-yellow mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">{t('whatToExpect.proposal')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-angola-yellow mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">{t('whatToExpect.communication')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form - Now using ContactForm component */}
          <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-10 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('form.title')}</h2>
            <ContactForm locale={locale} />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 md:mt-24 bg-gradient-to-br from-angola-red/5 to-transparent rounded-3xl p-10 md:p-12 lg:p-16 border border-angola-red/20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="../projects" 
              className="px-10 py-4 border-2 border-angola-red text-angola-red rounded-2xl font-semibold text-lg hover:bg-angola-red hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              {t('cta.viewWork')}
            </a>
            <a 
              href="../about" 
              className="px-10 py-4 border-2 border-angola-red text-angola-red rounded-2xl font-semibold text-lg hover:bg-angola-red hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              {t('cta.learnMore')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
