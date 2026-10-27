import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // General crawlers: allow everything except internal/private paths
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin/',
                    '/dashboard/',
                    '/login',
                    '/register',
                    '/password/reset',
                    '/api/',
                    '/storage/',
                    '/vendor/',
                    '/.env',
                    '/*?*',   // Block query-string variations to save crawl budget
                ],
            },
            // Allow Googlebot full access (override wildcard)
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: [
                    '/admin/',
                    '/dashboard/',
                    '/login',
                    '/register',
                    '/password/reset',
                    '/api/',
                    '/storage/',
                ],
            },
            // Block AI scrapers that don't respect SEO value
            {
                userAgent: 'GPTBot',
                disallow: ['/'],
            },
            {
                userAgent: 'CCBot',
                disallow: ['/'],
            },
        ],
        sitemap: 'https://radwanfs.com/sitemap.xml',
        host: 'https://radwanfs.com',
    }
}
