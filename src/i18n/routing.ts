import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'ar', 'ru', 'fr', 'es'],
    defaultLocale: 'en',
    localeDetection: true,
    localePrefix: 'always'
});