import { MetadataRoute } from 'next'
import { locales } from '@/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://empty-ai-agency.vercel.app'
  
  const routes = [
    '',
    '/projects',
    '/about',
    '/contact',
    '/case-studies',
    '/case-studies/dashboard-financeiro',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add routes for each locale
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}${route}`])
          ),
        },
      })
    })
  })

  return sitemap
}
