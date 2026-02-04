import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');
  
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            {t('title')} <span className="text-accent">{t('titleAccent')}</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">{t('letsConnect')}</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{t('email')}</h3>
                  <a href="mailto:empty.vl.angola@gmail.com" className="text-foreground/70 hover:text-accent transition-colors break-all">
                    empty.vl.angola@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{t('github')}</h3>
                  <a 
                    href="https://github.com/empty-VL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-accent transition-colors break-all"
                  >
                    github.com/empty-VL
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{t('location')}</h3>
                  <p className="text-foreground/70">{t('angola')}</p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-muted rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold mb-4">{t('whatToExpect.title')}</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('whatToExpect.response')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('whatToExpect.consultation')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('whatToExpect.proposal')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('whatToExpect.communication')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6">{t('form.title')}</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('form.nameRequired')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder={t('form.name')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('form.emailRequired')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder={t('form.emailLabel')}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  {t('form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder={t('form.company')}
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  {t('form.projectType')}
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">{t('form.selectType')}</option>
                  <option value="web-app">{t('form.webApp')}</option>
                  <option value="mobile-app">{t('form.mobileApp')}</option>
                  <option value="ai-automation">{t('form.aiAutomation')}</option>
                  <option value="enterprise">{t('form.enterprise')}</option>
                  <option value="consulting">{t('form.consulting')}</option>
                  <option value="other">{t('form.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('form.messageRequired')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors"
              >
                {t('form.send')}
              </button>

              <p className="text-sm text-foreground/60 text-center">
                {t('form.note')}{' '}
                <a href="mailto:empty.vl.angola@gmail.com" className="text-accent hover:underline">
                  empty.vl.angola@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl p-12 border border-accent/20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="../projects" 
              className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors whitespace-nowrap"
            >
              {t('cta.viewWork')}
            </a>
            <a 
              href="../about" 
              className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors whitespace-nowrap"
            >
              {t('cta.learnMore')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
