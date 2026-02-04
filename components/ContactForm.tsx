'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm({ locale }: { locale: string }) {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setStatus('success');
      // Clear form on success
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-base font-semibold mb-3">
          {t('form.nameRequired')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full px-6 py-4 bg-background border border-border rounded-2xl focus:outline-none focus:border-angola-red transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder={t('form.name')}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-base font-semibold mb-3">
          {t('form.emailRequired')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full px-6 py-4 bg-background border border-border rounded-2xl focus:outline-none focus:border-angola-red transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder={t('form.emailLabel')}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-base font-semibold mb-3">
          {t('form.company')}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full px-6 py-4 bg-background border border-border rounded-2xl focus:outline-none focus:border-angola-red transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder={t('form.company')}
        />
      </div>

      <div>
        <label htmlFor="project" className="block text-base font-semibold mb-3">
          {t('form.projectType')}
        </label>
        <select
          id="project"
          name="project"
          value={formData.project}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full px-6 py-4 bg-background border border-border rounded-2xl focus:outline-none focus:border-angola-red transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
        <label htmlFor="message" className="block text-base font-semibold mb-3">
          {t('form.messageRequired')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full px-6 py-4 bg-background border border-border rounded-2xl focus:outline-none focus:border-angola-red transition-all duration-300 resize-none text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder={t('form.messagePlaceholder')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-10 py-4 bg-angola-red hover:bg-angola-red-dark text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {locale === 'pt' ? 'Enviando...' : 'Sending...'}
          </span>
        ) : (
          t('form.send')
        )}
      </button>

      {/* Success Message */}
      {status === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-semibold text-green-600">
                {locale === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!'}
              </p>
              <p className="text-sm text-green-600/80 mt-1">
                {locale === 'pt' ? 'Entraremos em contacto em breve.' : 'We\'ll get back to you soon.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div>
              <p className="font-semibold text-red-600">
                {locale === 'pt' ? 'Erro ao enviar mensagem' : 'Error sending message'}
              </p>
              <p className="text-sm text-red-600/80 mt-1">
                {errorMessage || (locale === 'pt' ? 'Por favor, tente novamente.' : 'Please try again.')}
              </p>
            </div>
          </div>
        </div>
      )}

      <p className="text-sm text-foreground/60 text-center">
        {t('form.note')}{' '}
        <a href="mailto:empty.vl.angola@gmail.com" className="text-angola-red hover:underline">
          empty.vl.angola@gmail.com
        </a>
      </p>
    </form>
  );
}
