import { Metadata } from "next";
import { notFound } from "next/navigation";
import { someoneDiesData } from "@/data/someoneDiesData";
import SomeoneDiesDetailContent from "@/components/SomeoneDies/SomeoneDiesDetailContent";

interface Props {
    params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, id } = await params;
    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const caseItem = someoneDiesData.find((item) => item.id === id);

    if (!caseItem) {
        return {};
    }

    const title = caseItem.title[currentLocale] || caseItem.title.ar;
    const description = caseItem.desc[currentLocale] || caseItem.desc.ar;

    return {
        title: `${title} | رضوان لنقل الجثامين`,
        description
    };
}

export default async function SomeoneDiesDetailPage({ params }: Props) {
    const { id } = await params;

    const caseItem = someoneDiesData.find((item) => item.id === id);

    if (!caseItem) {
        notFound();
    }

    return <SomeoneDiesDetailContent caseItem={caseItem} />;
}