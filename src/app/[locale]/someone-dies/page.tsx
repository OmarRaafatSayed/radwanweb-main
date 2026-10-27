import { Metadata } from "next";
import SomeoneDiesContent from "@/components/SomeoneDies/SomeoneDiesContent";

interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale) ? locale : "ar";

    const titles: Record<string, string> = {
        ar: "عندما يموت شخص ما | رضوان لنقل الجثامين",
        en: "When Someone Dies | Radwan Funeral Services",
        ru: "Когда кто-то умирает | Ритуальные услуги Радван",
        fr: "Quand quelqu'un meurt | Services Funéraires Radwan",
        es: "Cuando alguien muere | Servicios Funerarios Radwan"
    };

    const descriptions: Record<string, string> = {
        ar: "سنرشدكم خلال الخطوات الإجرائية والصحية حسب مكان وقوع الوفاة، ونقدم لكم الدعم الكامل والوثائق المطلوبة.",
        en: "We guide you through the necessary steps depending on where the death occurred, providing full guidance and support.",
        ru: "Мы направим вас по необходимым шагам в зависимости от места смерти, предоставляя полную поддержку.",
        fr: "Nous vous guidons à travers les étapes nécessaires selon le lieu du décès, en vous offrant un soutien complet.",
        es: "Le guiamos a través de los pasos necesarios según el lugar del fallecimiento, brindándole apoyo integral."
    };

    return {
        title: titles[currentLocale] || titles.ar,
        description: descriptions[currentLocale] || descriptions.ar,
    };
}

export default function SomeoneDiesPage() {
    return <SomeoneDiesContent />;
}