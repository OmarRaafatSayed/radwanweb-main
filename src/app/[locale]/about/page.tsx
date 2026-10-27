import AboutHero from "@/components/AboutSections/AboutHero/AboutHero";
import Accreditations from "@/components/AboutSections/Accreditations/Accreditations";
import CtaSection from "@/components/AboutSections/CtaSection/CtaSection";
import Pillars from "@/components/AboutSections/Pillars/Pillars";
import Timeline from "@/components/AboutSections/Timeline/Timeline";

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
            title: "من نحن | شركة رضوان لنقل وتجهيز الموتى دولياً ومحلياً",
            description: "تعرف على شركة رضوان، قصتنا، أهدافنا، والاعتمادات الرسمية التي نمتلكها لنقل وتجهيز الجثامين وتخليص كافة الإجراءات القانونية بكل وقار واحترام للفقيد.",
            keywords: "من نحن رضوان, شركة رضوان, نقل موتى دولي, تراخيص نقل الموتى, قصة شركة رضوان, اعتمادات شركة رضوان, خدمات نقل الجثامين",
            ogLocale: "ar_EG"
        },
        en: {
            siteName: "Radwan Funeral Services",
            title: "About Us | Radwan International Deceased Repatriation & Care",
            description: "Learn more about Radwan Company, our story, mission, ethical values, and official legal accreditations for local and international deceased repatriation.",
            keywords: "about Radwan, Radwan company, deceased repatriation history, funeral services mission, official repatriations, accredited funeral home",
            ogLocale: "en_US"
        },
        ru: {
            siteName: "Ритуальные услуги Радван",
            title: "О нас | Компания Радван - Репатриация и Транспортировка усопших",
            description: "Узнайте больше о компании Радван, нашей истории, ценностях и официальных государственных аккредитациях для международной репатриации тел с уважением.",
            keywords: "о компании Радван, история Радван, ритуальные услуги о нас, аккредитованная репатриация, международная транспортировка усопших",
            ogLocale: "ru_RU"
        },
        fr: {
            siteName: "Services Funéraires Radwan",
            title: "À Propos de Nous | Société Radwan de Rapatriement de Défunts",
            description: "Découvrez la société Radwan, notre histoire, nos valeurs éthiques et nos agréments officiels pour le transport et le rapatriement international de défunts.",
            keywords: "à propos de Radwan, histoire Radwan, valeurs funéraires, agréments officiels rapatriement, transport de défunts international",
            ogLocale: "fr_FR"
        },
        es: {
            siteName: "Servicios Funerarios Radwan",
            title: "Sobre Nosotros | Compañía Radwan de Traslado y Repatriación",
            description: "Conozca más sobre la Compañía Radwan, nuestra trayectoria, valores éticos y las acreditaciones oficiales para el traslado nacional e internacional de fallecidos.",
            keywords: "sobre nosotros Radwan, historia de Radwan, valores funerarios, repatriación acreditada, traslado oficial de fallecidos",
            ogLocale: "es_ES"
        }
    };

    const data = content[currentLocale];

    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords,

        alternates: {
            canonical: `/${currentLocale}/about`,
            languages: {
                "ar": `${BASE_URL}/ar/about`,
                "en": `${BASE_URL}/en/about`,
                "ru": `${BASE_URL}/ru/about`,
                "fr": `${BASE_URL}/fr/about`,
                "es": `${BASE_URL}/es/about`,
                "x-default": `${BASE_URL}/en/about`,
            },
        },

        openGraph: {
            title: data.title,
            description: data.description,
            url: `${BASE_URL}/${currentLocale}/about`,
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

export default function About() {
    return (
        <div>
            <AboutHero />
            <Timeline />
            <Pillars />
            <Accreditations />
            <CtaSection />
        </div>
    )
}
