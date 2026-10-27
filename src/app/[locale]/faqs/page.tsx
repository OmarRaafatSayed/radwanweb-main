import { Metadata } from "next";
import BlogCTA from "@/components/Blogs/BlogCTA/BlogCTA";
import FAQHero from "@/components/FAQ/FAQHero/FAQHero";
import FAQAccordion from "@/components/FAQ/FAQAccordion/FAQAccordion";
import { faqItemsData } from "@/data/faq";

const BASE_URL = "https://radwanfs.com";
const LOCALES = ["ar", "en", "ru", "fr", "es"] as const;
type Locale = (typeof LOCALES)[number];

export async function generateMetadata({ params }: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const currentLocale: Locale = LOCALES.includes(locale as Locale) ? locale as Locale : "ar";

    const content: Record<Locale, { siteName: string; title: string; description: string; keywords: string; ogLocale: string }> = {
        ar: {
            siteName: "رضوان لخدمات نقل الموتى",
            title: "الأسئلة الشائعة | شركة رضوان لنقل الموتى دولياً",
            description: "إجابات شاملة لكافة الأسئلة الشائعة والاستفسارات حول إجراءات نقل المتوفين بين الدول، التكاليف، الصناديق والتصاريح الرسمية.",
            keywords: "أسئلة شائعة نقل الموتى, إجراءات الشحن الجوي, تكاليف نقل الموتى, تصاريح السفارات",
            ogLocale: "ar_EG"
        },
        en: {
            siteName: "Radwan Funeral Services",
            title: "Frequently Asked Questions | Radwan Repatriation Services",
            description: "Comprehensive answers to all common questions about deceased repatriation, costs, caskets, and official permits.",
            keywords: "repatriation FAQ, funeral transport questions, body shipping permits, repatriation cost FAQ",
            ogLocale: "en_US"
        },
        ru: {
            siteName: "Ритуальные услуги Радван",
            title: "Часто задаваемые вопросы | Репатриация Радван",
            description: "Подробные ответы на все вопросы о транспортировке усопших, стоимости, гробах и разрешениях.",
            keywords: "часто задаваемые вопросы репатриация, ритуальные услуги вопросы, транспортировка усопших",
            ogLocale: "ru_RU"
        },
        fr: {
            siteName: "Services Funéraires Radwan",
            title: "Foire Aux Questions | Rapatriement International Radwan",
            description: "Réponses complètes à toutes vos questions sur le rapatriement de défunts, les coûts, les cercueils et les démarches.",
            keywords: "FAQ rapatriement, questions transport funéraire, permis consulaires, coût rapatriement",
            ogLocale: "fr_FR"
        },
        es: {
            siteName: "Servicios Funerarios Radwan",
            title: "Preguntas Frecuentes | Repatriación Internacional Radwan",
            description: "Respuestas detalladas a todas sus preguntas sobre repatriación de fallecidos, costos, ataúdes y trámites.",
            keywords: "preguntas frecuentes repatriación, traslado de fallecidos FAQ, permisos consulares",
            ogLocale: "es_ES"
        }
    };

    const data = content[currentLocale];

    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords,

        alternates: {
            // Fixed: was /faq — correct path is /faqs
            canonical: `/${currentLocale}/faqs`,
            languages: {
                "ar": `${BASE_URL}/ar/faqs`,
                "en": `${BASE_URL}/en/faqs`,
                "ru": `${BASE_URL}/ru/faqs`,
                "fr": `${BASE_URL}/fr/faqs`,
                "es": `${BASE_URL}/es/faqs`,
                "x-default": `${BASE_URL}/en/faqs`,
            },
        },

        openGraph: {
            title: data.title,
            description: data.description,
            // Fixed: was /faq — correct path is /faqs
            url: `${BASE_URL}/${currentLocale}/faqs`,
            siteName: data.siteName,
            locale: data.ogLocale,
            type: "website",
            images: [
                {
                    url: `${BASE_URL}/images/og-home.jpg`,
                    width: 1200,
                    height: 630,
                    alt: data.siteName,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: data.title,
            description: data.description,
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large",
            },
        },
    };
}

// JSON-LD: FAQPage schema — high CTR impact (rich results in Google)
function FAQSchemaMarkup({ locale }: { locale: Locale }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItemsData.map((item) => ({
            "@type": "Question",
            name: item.question[locale] || item.question.en,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer[locale] || item.answer.en,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const currentLocale: Locale = LOCALES.includes(locale as Locale) ? locale as Locale : "ar";

    return (
        <>
            <FAQSchemaMarkup locale={currentLocale} />
            <main className="faq-page-wrapper">
                <FAQHero />
                <FAQAccordion />
                <BlogCTA />
            </main>
        </>
    );
}
