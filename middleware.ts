import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches (prioritize Portuguese for Angola market)
  defaultLocale,

  // Always show locale prefix for clarity
  localePrefix: 'always',
  
  // Detect locale from Accept-Language header or use default (pt)
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*']
};
