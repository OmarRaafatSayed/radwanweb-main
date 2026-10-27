import ServicesCTA from "@/components/ServicesSections/ServicesCTA/ServicesCTA";
import ServicesHero from "@/components/ServicesSections/ServicesHero/ServicesHero";
import ServicesListContent from "@/components/ServicesSections/ServicesListContent/ServicesListContent";
import { servicesList } from "@/data/services";

import { Metadata } from "next";

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
            title: "خدماتنا المباشرة | شركة رضوان لنقل وتجهيز الموتى دولياً",
            description: "استعرض جميع خدماتنا المباشرة الشاملة لنقل وتجهيز الموتى والتحنيط وتوفير التوابيت والتصاريح القانونية والدبلوماسية بكل احترام واحترافية.",
            keywords: "خدمات نقل الموتى, خدمات التحنيط, إعادة الجثامين دولياً, شحن الجثامين, شركة رضوان لخدمات الموتى",
            ogLocale: "ar_EG"
        },
        en: {
            siteName: "Radwan Funeral Services",
            title: "Our Funeral Services | Radwan Deceased Repatriation & Care",
            description: "Explore our comprehensive range of funeral services, international deceased repatriation, embalming, caskets, and legal permits handled with dignity.",
            keywords: "funeral services, deceased repatriation, embalming services, caskets selection, Radwan funeral services",
            ogLocale: "en_US"
        },
        ru: {
            siteName: "Ритуальные услуги Радван",
            title: "Наши ритуальные услуги | Международная репатриация усопших Радван",
            description: "Ознакомьтесь с полным спектром наших услуг по транспортировке усопших, бальзамированию, подбору гробов и оформлению юридических разрешений.",
            keywords: "ритуальные услуги, репатриация усопших, бальзамирование, гробы, ритуальные услуги Радван",
            ogLocale: "ru_RU"
        },
        fr: {
            siteName: "Services Funéraires Radwan",
            title: "Nos Services Funéraires | Rapatriement International Radwan",
            description: "Découvrez notre gamme complète de services funéraires, rapatriement international de défunts, embaumement, choix de cercueils et démarches légales.",
            keywords: "services funéraires, rapatriement de défunts, embaumement, choix de cercueils, services funéraires Radwan",
            ogLocale: "fr_FR"
        },
        es: {
            siteName: "Servicios Funerarios Radwan",
            title: "Nuestros Servicios Funerarios | Repatriación Internacional Radwan",
            description: "Explore nuestra gama completa de servicios funerarios, repatriación internacional de fallecidos, embalsamamiento, selección de ataúdes y trámites legales.",
            keywords: "servicios funerarios, repatriación de fallecidos, embalsamamiento, selección de ataúdes, servicios funerarios Radwan",
            ogLocale: "es_ES"
        }
    };

    const data = content[currentLocale];

    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords,

        alternates: {
            canonical: `/${currentLocale}/services`,
            languages: {
                "ar": `${BASE_URL}/ar/services`,
                "en": `${BASE_URL}/en/services`,
                "ru": `${BASE_URL}/ru/services`,
                "fr": `${BASE_URL}/fr/services`,
                "es": `${BASE_URL}/es/services`,
                "x-default": `${BASE_URL}/en/services`,
            },
        },

        openGraph: {
            title: data.title,
            description: data.description,
            url: `${BASE_URL}/${currentLocale}/services`,
            siteName: data.siteName,
            locale: data.ogLocale,
            type: "website",
            images: [
                {
                    url: `${BASE_URL}/images/og-services.jpg`,
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
                "max-video-preview": -1,
            },
        },
    };
}

// JSON-LD: Service list page schema
function ServicesSchemaMarkup({ locale }: { locale: Locale }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: locale === "ar" ? "خدمات رضوان للجنازات" : "Radwan Funeral Services List",
        url: `${BASE_URL}/${locale}/services`,
        itemListElement: servicesList.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "Service",
                "@id": `${BASE_URL}/${locale}/services/${service.id}`,
                name: service.title[locale] || service.title.en,
                description: service.desc[locale] || service.desc.en,
                url: `${BASE_URL}/${locale}/services/${service.id}`,
                provider: {
                    "@type": "LocalBusiness",
                    "@id": `${BASE_URL}/#organization`,
                },
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

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const currentLocale: Locale = LOCALES.includes(locale as Locale) ? locale as Locale : "ar";

    return (
        <>
            <ServicesSchemaMarkup locale={currentLocale} />
            <main className="services-page">
                <ServicesHero />
                <ServicesListContent />
                <ServicesCTA />
            </main>
        </>
    );
}
