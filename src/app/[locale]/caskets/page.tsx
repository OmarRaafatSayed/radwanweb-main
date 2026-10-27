import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CasketsHero from "@/components/CasketsSections/CasketsHero/CasketsHero";
import CasketsCatalog from "@/components/CasketsSections/CasketsCatalog/CasketsCatalog";
import CasketsCTA from "@/components/CasketsSections/CasketsCTA/CasketsCTA";

interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const t = await getTranslations({ locale: currentLocale, namespace: "CasketsPage" });

    const baseUrl = "https://radwanfs.com";
    const ogLocales = { ar: "ar_EG", en: "en_US", ru: "ru_RU", fr: "fr_FR", es: "es_ES" };

    const title = `${t("heroTitle")} | رضوان لنقل الجثامين`;
    const description = t("heroSubtitle");

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${currentLocale}/caskets`,
            siteName: "Radwan Funeral Services",
            locale: ogLocales[currentLocale],
            type: "website",
            images: [{ url: `${baseUrl}/images/og-image.jpg`, width: 1200, height: 630 }]
        },
        alternates: {
            languages: {
                ar: `/ar/caskets`,
                en: `/en/caskets`,
                ru: `/ru/caskets`,
                fr: `/fr/caskets`,
                es: `/es/caskets`
            }
        },
        robots: { index: true, follow: true }
    };
}

export default async function CasketsPage() {
    return (
        <main className="caskets-page">
            <CasketsHero />
            <CasketsCatalog />
            <CasketsCTA />
        </main>
    );
}