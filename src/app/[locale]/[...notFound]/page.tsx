import NotFoundClient from "@/components/NotFoundClient/NotFoundClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale) ? locale : "ar";

    const titles: Record<string, string> = {
        ar: "404 - الصفحة غير موجودة | الرضوان",
        en: "404 - Page Not Found | Radwan",
        ru: "404 - Страница не найдена | Радван",
        fr: "404 - Page Non Trouvée | Radwan",
        es: "404 - Página No Encontrada | Radwan"
    };

    const descriptions: Record<string, string> = {
        ar: "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة للصفحة الرئيسية لشركة الرضوان لخدمات نقل الموتى.",
        en: "Sorry, the page you are looking for does not exist or has been moved. Return to Radwan Funeral Services home page.",
        ru: "Извините, страница, которую вы ищете, не существует или была перемещена. Вернитесь на главную страницу Радван.",
        fr: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée. Retournez à la page d'accueil de Radwan.",
        es: "Lo sentimos, la página que buscas no existe o ha sido movida. Vuelve a la página principal de Radwan."
    };

    return {
        title: titles[currentLocale] || titles.ar,
        description: descriptions[currentLocale] || descriptions.ar,
        robots: {
            index: false,
            follow: true,
        }
    };
}

export default function NotFoundPage() {
    return <NotFoundClient />;
}