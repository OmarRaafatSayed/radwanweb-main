import ContactContent from "@/components/ContactSections/ContactContent/ContactContent";
import ContactCTA from "@/components/ContactSections/ContactCTA/ContactCTA";
import ContactHero from "@/components/ContactSections/ContactHero/ContactHero";
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
            title: "تواصل معنا | شركة رضوان لنقل وتجهيز الموتى دولياً",
            description: "تواصل مع شركة رضوان لخدمات نقل الموتى دولياً بالقاهرة. نحن متواجدون على مدار 24 ساعة لتلبية طلباتك وتسهيل كافة الإجراءات الرسمية.",
            keywords: "تواصل معنا رضوان, رقم شركة نقل الموتى, نقل الجثامين القاهرة, واتساب نقل الموتى, اتصل بنا رضوان",
            ogLocale: "ar_EG"
        },
        en: {
            siteName: "Radwan Funeral Services",
            title: "Contact Us | Radwan International Repatriation Services",
            description: "Contact Radwan International Repatriation Services in Cairo. Available 24/7 for urgent assistance, inquiries, and official procedures.",
            keywords: "contact Radwan, funeral transport phone, Cairo body shipping, repatriation WhatsApp, call Radwan",
            ogLocale: "en_US"
        },
        ru: {
            siteName: "Ритуальные услуги Радван",
            title: "Связаться с нами | Ритуальные услуги Радван",
            description: "Свяжитесь с компанией Радван в Каире. Мы работаем 24/7 для оперативного решения всех вопросов по репатриации.",
            keywords: "контакты Радван, телефон ритуальных услуг, транспортировка усопших Каир, WhatsApp репатриация",
            ogLocale: "ru_RU"
        },
        fr: {
            siteName: "Services Funéraires Radwan",
            title: "Contactez-nous | Services de Rapatriement Radwan",
            description: "Contactez les services de rapatriement Radwan au Caire. Disponible 24/7 pour toute assistance urgente et démarches officielles.",
            keywords: "contact Radwan, téléphone transport funéraire, rapatriement Le Caire, WhatsApp rapatriement",
            ogLocale: "fr_FR"
        },
        es: {
            siteName: "Servicios Funerarios Radwan",
            title: "Contáctenos | Servicios de Repatriación Radwan",
            description: "Póngase en contacto con Servicios de Repatriación Radwan en El Cairo. Disponibles 24/7 para atención urgente y trámites oficiales.",
            keywords: "contacto Radwan, teléfono traslado funerario, repatriación El Cairo, WhatsApp repatriación",
            ogLocale: "es_ES"
        }
    };

    const data = content[currentLocale];

    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords,

        alternates: {
            canonical: `/${currentLocale}/contact`,
            languages: {
                "ar": `${BASE_URL}/ar/contact`,
                "en": `${BASE_URL}/en/contact`,
                "ru": `${BASE_URL}/ru/contact`,
                "fr": `${BASE_URL}/fr/contact`,
                "es": `${BASE_URL}/es/contact`,
                "x-default": `${BASE_URL}/en/contact`,
            },
        },

        openGraph: {
            title: data.title,
            description: data.description,
            url: `${BASE_URL}/${currentLocale}/contact`,
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

// JSON-LD: ContactPage + LocalBusiness schema injected at runtime
function ContactSchemaMarkup({ locale }: { locale: Locale }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: `${BASE_URL}/${locale}/contact`,
        mainEntity: {
            "@type": "LocalBusiness",
            "@id": `${BASE_URL}/#organization`,
            name: "Radwan Funeral Services",
            telephone: ["+201500017444", "+201116779707", "+201009924201"],
            email: "info@radwanfs.com",
            address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
                addressLocality: "Cairo",
            },
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "00:00",
                closes: "23:59",
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const currentLocale: Locale = LOCALES.includes(locale as Locale) ? locale as Locale : "ar";

    return (
        <>
            <ContactSchemaMarkup locale={currentLocale} />
            <div>
                <ContactHero />
                <ContactContent />
                <ContactCTA />
            </div>
        </>
    );
}
