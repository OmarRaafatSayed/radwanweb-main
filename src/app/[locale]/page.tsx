import AboutSection from "@/components/HomeSections/AboutSection/AboutSection";
import CallToAction from "@/components/HomeSections/CallToAction/CallToAction";
import CountriesSection from "@/components/HomeSections/CountriesSection/CountriesSection";
import Hero from "@/components/HomeSections/Hero/Hero";
import PartnersSection from "@/components/HomeSections/PartnersSection/PartnersSection";
import ServicesSection from "@/components/HomeSections/ServicesSection/ServicesSection";
import StatsSection from "@/components/HomeSections/StatsSection/StatsSection";
import TestimonialsSection from "@/components/HomeSections/TestimonialsSection/TestimonialsSection";
import WhyRadwan from "@/components/HomeSections/WhyRadwan/WhyRadwan";

import { Metadata } from "next";

const BASE_URL = "https://radwanfs.com";
const LOCALES = ["ar", "en", "ru", "fr", "es"] as const;
type Locale = (typeof LOCALES)[number];

export async function generateMetadata({ params }: {
    params: Promise<{ id: string, locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const currentLocale: Locale = LOCALES.includes(locale as Locale) ? locale as Locale : "ar";

    const content: Record<Locale, { siteName: string; title: string; description: string; keywords: string; ogLocale: string }> = {
        ar: {
            siteName: "رضوان لخدمات نقل الموتى",
            title: "رضوان | نقل الموتى وتجهيز الجثامين واستخراج التصاريح",
            description: "شركة رضوان لخدمات نقل الموتى وتجهيز الجثامين واستخراج كافة التصاريح والتنسيق الدولي والمحلي لشحن ونقل المتوفى بكافة الإجراءات القانونية وقاراً واحتراماً للفقيد.",
            keywords: "نقل الموتى, شحن جثامين, تجهيز الموتى, استخراج تصاريح دفن, غسيل وتكفين, حجز مقابر, رضوان, نقل الموتى مصر, نقل الموتى السعودية, شحن الموتى جويا, التنسيق مع السفارات",
            ogLocale: "ar_EG"
        },
        en: {
            siteName: "Radwan Funeral Services",
            title: "Radwan | Deceased Transportation & Repatriation Services",
            description: "Radwan Company offers professional deceased transportation, repatriation services, burial permits, and local & international funeral logistics with utmost dignity.",
            keywords: "deceased transportation, body repatriation, funeral services, burial permits, shrouding, cemetery booking, international repatriation, Radwan funeral services, embassy coordination",
            ogLocale: "en_US"
        },
        ru: {
            siteName: "Ритуальные услуги Радван",
            title: "Радван | Транспортировка усопших и репатриация тел",
            description: "Компания Радван предоставляет профессиональные услуги по транспортировке и репатриации усопших, получению разрешений на захоронение и координации похорон с уважением и достоинством.",
            keywords: "транспортировка усопших, репатриация тела, похоронные услуги, разрешения на захоронение, омовение и саван, бронирование кладбищ, международная репатриация, похоронное бюро Радван",
            ogLocale: "ru_RU"
        },
        fr: {
            siteName: "Services Funéraires Radwan",
            title: "Radwan | Services de Rapatriement et Transport de Défunts",
            description: "La société Radwan propose des services professionnels de transport de défunts, de rapatriement de corps, d'obtention de permis d'inhumation et de logistique funéraire avec dignité.",
            keywords: "transport de défunts, rapatriement de corps, services funéraires, permis d'inhumation, toilette funéraire, réservation de tombes, rapatriement international, services funéraires Radwan",
            ogLocale: "fr_FR"
        },
        es: {
            siteName: "Servicios Funerarios Radwan",
            title: "Radwan | Traslado y Repatriación de Fallecidos",
            description: "Compañía Radwan ofrece servicios profesionales de traslado de fallecidos, repatriación de cuerpos, permisos de entierro y logística funeraria con el mayor respeto.",
            keywords: "traslado de fallecidos, repatriación de cuerpos, servicios funerarios, permisos de entierro, lavado y mortaja, reserva de cementerios, repatriación internacional, servicios funerarios Radwan",
            ogLocale: "es_ES"
        }
    };

    const data = content[currentLocale];

    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords,

        // Canonical — resolves against metadataBase in layout
        alternates: {
            canonical: `/${currentLocale}`,
            languages: {
                "ar": `${BASE_URL}/ar`,
                "en": `${BASE_URL}/en`,
                "ru": `${BASE_URL}/ru`,
                "fr": `${BASE_URL}/fr`,
                "es": `${BASE_URL}/es`,
                "x-default": `${BASE_URL}/en`,
            },
        },

        openGraph: {
            title: data.title,
            description: data.description,
            url: `${BASE_URL}/${currentLocale}`,
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
            images: [`${BASE_URL}/images/og-home.jpg`],
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

// JSON-LD Schema: LocalBusiness + Organization
function HomeSchemaMarkup({ locale }: { locale: Locale }) {
    const names: Record<Locale, string> = {
        ar: "رضوان لخدمات نقل الموتى",
        en: "Radwan Funeral Services",
        ru: "Ритуальные услуги Радван",
        fr: "Services Funéraires Radwan",
        es: "Servicios Funerarios Radwan",
    };

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["LocalBusiness", "FuneralHome"],
                "@id": `${BASE_URL}/#organization`,
                name: names[locale],
                url: BASE_URL,
                logo: {
                    "@type": "ImageObject",
                    url: `${BASE_URL}/logo.png`,
                    width: 100,
                    height: 68,
                },
                image: `${BASE_URL}/images/og-home.jpg`,
                description: "Professional deceased repatriation, funeral logistics, embalming, and burial permit services operating internationally from Cairo, Egypt.",
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "EG",
                    addressLocality: "Cairo",
                },
                telephone: ["+201500017444", "+201116779707", "+201009924201"],
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+201500017444",
                    contactType: "customer service",
                    availableLanguage: ["Arabic", "English", "French", "Russian", "Spanish"],
                    hoursAvailable: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        opens: "00:00",
                        closes: "23:59",
                    },
                },
                sameAs: [
                    "https://www.facebook.com/radwanfs",
                    "https://wa.me/201557377897",
                ],
                areaServed: {
                    "@type": "GeoCircle",
                    geoMidpoint: { "@type": "GeoCoordinates", latitude: 30.0444, longitude: 31.2357 },
                    geoRadius: "50000",
                },
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Funeral & Repatriation Services",
                    itemListElement: [
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Repatriation" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Embalming & Preservation" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Caskets & Urns" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cremation Services" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Burial Permits" } },
                    ],
                },
            },
            {
                "@type": "WebSite",
                "@id": `${BASE_URL}/#website`,
                url: BASE_URL,
                name: names[locale],
                inLanguage: locale,
                publisher: { "@id": `${BASE_URL}/#organization` },
                potentialAction: {
                    "@type": "SearchAction",
                    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/en/blogs?q={search_term_string}` },
                    "query-input": "required name=search_term_string",
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const currentLocale: Locale = LOCALES.includes(locale as Locale) ? locale as Locale : "ar";

    return (
        <>
            <HomeSchemaMarkup locale={currentLocale} />
            <div>
                <Hero />
                <AboutSection />
                <ServicesSection />
                <CountriesSection />
                <WhyRadwan />
                <StatsSection />
                <TestimonialsSection />
                <PartnersSection />
                <CallToAction />
            </div>
        </>
    );
}
