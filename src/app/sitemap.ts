import { MetadataRoute } from 'next'
import { servicesList } from '@/data/services'
import { someoneDiesData } from '@/data/someoneDiesData'
import { casketsData } from '@/data/caskets'
import { blogsData } from '@/data/blogs'

// Revalidate once per day to keep lastModified fresh without rebuilding
export const revalidate = 86400

const BASE_URL = 'https://radwanfs.com'
const LOCALES = ['ar', 'en', 'ru', 'fr', 'es'] as const

// Use a stable build-time date to avoid cache churn on unchanged pages.
// Only override per-entry if you have a real updatedAt field.
const BUILD_DATE = new Date()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const entries: MetadataRoute.Sitemap = []

    // ── Static pages ──────────────────────────────────────────────────────────
    const staticPages: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
        { path: '',                   priority: 1.0, freq: 'daily'   },
        { path: '/about',             priority: 0.8, freq: 'monthly' },
        { path: '/services',          priority: 0.9, freq: 'weekly'  },
        { path: '/caskets',           priority: 0.8, freq: 'weekly'  },
        { path: '/urns',              priority: 0.8, freq: 'weekly'  },
        { path: '/someone-dies',      priority: 0.8, freq: 'monthly' },
        { path: '/blogs',             priority: 0.8, freq: 'daily'   },
        { path: '/faqs',              priority: 0.7, freq: 'monthly' },
        { path: '/privacy-policy',    priority: 0.3, freq: 'yearly'  },
        { path: '/terms-conditions',  priority: 0.3, freq: 'yearly'  },
        { path: '/contact',           priority: 0.7, freq: 'monthly' },
    ]

    for (const { path, priority, freq } of staticPages) {
        // x-default entry (no locale prefix) — points to English canonical
        entries.push({
            url: `${BASE_URL}/en${path}`,
            lastModified: BUILD_DATE,
            changeFrequency: freq,
            priority,
        })

        for (const locale of LOCALES) {
            entries.push({
                url: `${BASE_URL}/${locale}${path}`,
                lastModified: BUILD_DATE,
                changeFrequency: freq,
                priority: locale === 'ar' ? priority : priority - 0.05,
            })
        }
    }

    // ── Dynamic: services ─────────────────────────────────────────────────────
    for (const service of servicesList) {
        for (const locale of LOCALES) {
            entries.push({
                url: `${BASE_URL}/${locale}/services/${service.id}`,
                lastModified: BUILD_DATE,
                changeFrequency: 'monthly',
                priority: 0.75,
            })
        }
    }

    // ── Dynamic: someone-dies cases ───────────────────────────────────────────
    for (const caseItem of someoneDiesData) {
        for (const locale of LOCALES) {
            entries.push({
                url: `${BASE_URL}/${locale}/someone-dies/${caseItem.id}`,
                lastModified: BUILD_DATE,
                changeFrequency: 'monthly',
                priority: 0.7,
            })
        }
    }

    // ── Dynamic: caskets ──────────────────────────────────────────────────────
    for (const casket of casketsData) {
        for (const locale of LOCALES) {
            entries.push({
                url: `${BASE_URL}/${locale}/caskets/${casket.slug}`,
                lastModified: BUILD_DATE,
                changeFrequency: 'monthly',
                priority: 0.7,
            })
        }
    }

    // ── Dynamic: blog posts ───────────────────────────────────────────────────
    for (const post of blogsData) {
        for (const locale of LOCALES) {
            entries.push({
                url: `${BASE_URL}/${locale}/blogs/${post.slug}`,
                lastModified: BUILD_DATE,
                changeFrequency: 'weekly',
                priority: 0.65,
            })
        }
    }

    return entries
}
