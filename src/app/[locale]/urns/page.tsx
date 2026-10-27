import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import UrnsHero from "@/components/UrnsSections/UrnsHero/UrnsHero";
import UrnsCatalog from "@/components/UrnsSections/UrnsCatalog/UrnsCatalog";
import UrnsCTA from "@/components/UrnsSections/UrnsCTA/UrnsCTA";

interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const t = await getTranslations({ locale: currentLocale, namespace: "UrnsPage" });

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
            url: `${baseUrl}/${currentLocale}/urns`,
            siteName: "Radwan Funeral Services",
            locale: ogLocales[currentLocale],
            type: "website",
            images: [{ url: `${baseUrl}/images/og-image.jpg`, width: 1200, height: 630 }]
        },
        alternates: {
            languages: {
                ar: `/ar/urns`,
                en: `/en/urns`,
                ru: `/ru/urns`,
                fr: `/fr/urns`,
                es: `/es/urns`
            }
        },
        robots: { index: true, follow: true }
    };
}

export default async function UrnsPage() {
    return (
        <main className="urns-page">
            <UrnsHero />
            <UrnsCatalog />
            <UrnsCTA />
        </main>
    );
}